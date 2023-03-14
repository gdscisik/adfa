const auth = require('firebase/auth');
const { signInWithPopup, GoogleAuthProvider } = require("firebase/auth");
const provider = new GoogleAuthProvider();
const UsersService = require("../services/UsersService.js");
const CampaignsService = require("../services/CampaignService.js");
const uuid = require("uuid");
const eventEmitter = require("../scripts/events/EventEmitter.js");
const { passwordToHash } = require("../scripts/utils/HashPassword.js");
const path = require("path");
// provider.addScope("https://www.googleapis.com/auth/users.readonly");

const {
  generateAccessToken,
  generateRefreshToken,
} = require("../scripts/utils/Tokens.js");
const { Query } = require('firefose');

const getAllUsers = async (req, res) => {
  const users = await UsersService.findAll();
  // res.render("users", { users: users });
  res.send({ users: users });
};
const findUser = async (req, res) => {
  const user = await UsersService.findById(req.params.id);
  res.render("users", { user: user });
};
const createUser = async (req, res) => {
  req.body.password = passwordToHash(req.body.password);
  const createdUser = await UsersService.add(req.body);
  res.render("users", { user: createdUser });
};
const removeUser = async (req, res) => {
  const itemId = await UsersService.delete(req.params.id);
  res.render("users");
};

const signInWithGoogle = async (req, res) => {
  await auth.signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
    console.log('user :>> ', user);
    console.log('token :>> ', token);
    console.log('credential :>> ', credential);
    res.send("kasjdiasjdlkajsdkjsakdlksj");
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}


const login = async (req, res) => {
  //req.body.password = passwordToHash(req.body.password);
  // let loggedInUser = await UsersService.login(req.body);
  // // console.log("loggedInUser Before :>> ", loggedInUser);
  // if (!loggedInUser) {
  //   return "Cannot login with provided data!";
  // } else {
  //   loggedInUser = {
  //     ...loggedInUser.toObject(),
  //     tokens: {
  //       access_token: generateAccessToken(loggedInUser),
  //       refresh_token: generateRefreshToken(loggedInUser),
  //     },
  //   };
  //   delete loggedInUser.password;
  // }
  // // console.log("loggedInUser After :>> ", loggedInUser);
  // //res.send(loggedInUser);
  // // res.render("login", { user: loggedInUser });
  // res.render("login", { user: JSON.stringify(loggedInUser) });
  const query = new Query().where("email", "==", `${req.body.email}`).where("password", "==", `${req.body.password}`)
  const userData = {
    email: req.body.email,
    password: req.body.password
  };
  const user = await UsersService.findById(query);
  console.log('user :>> ', user);
  if(user != null) {
    res.send(userData);
    res.redirect("/");
  } else {
    res.send("Incorrect email or password!");
  }
};
const getUserProjects = async (req, res) => {
  // const userId = req.params.user?._id; sending id over params
  // const userProjects = await ProjectsService.getUserProjects(req.params.id); // sending id over params
  // console.log("req.user?._id :>> ", req.user?._id);
  const userProjects = await CampaignsService.findAll({
    user_id: req.user?._id,
  }); // sending id over access_token
  console.log("userProjects :>> ", userProjects);
  res.send(userProjects);
};
const resetPassword = async (req, res) => {
  // req.body.email;
  return false;
  console.log("req.user :>> ", req.user);
  const new_password =
    uuid.v4()?.split("-")[1] || `usr-${new Date().getTime()}`;
  console.log("new_password :>> ", new_password);
  const updatedUser = await UsersService.update(
    { email: req.body.email },
    { password: passwordToHash(new_password) }
  );
  eventEmitter.emit("send_email", {
    to: updatedUser.email,
    subject: "Reset Password",
    html: `<p>Your password has been reset by your request!<br>Do not forget to cahnge your password after you logged in to the system!<br>Your new password is: <b>${new_password}</b></p>`, // html body
  });
  console.log("updatedUser :>> ", updatedUser);
};
const updateUserData = async (req, res) => {
  const updatedUser = await UsersService.update(req.user?._id, req.body);
  res.send(updatedUser);
};
const changePassword = async (req, res) => {
  req.body.password = passwordToHash(req.body.password);
  const updatedUser = await UsersService.update(
    { _id: req.user?._id },
    req.body
  );
  res.send(updatedUser);
};
const updateProfileImage = async (req, res) => {
  // 1 - Image Control
  // return false;
  if (!req?.files?.profile_image) {
    res.send("Error");
  }
  const extension = path.extname(req.files.profile_image.name);
  const fileName = `${req?.user._id}${extension}`;
  const folderPath = path.join(__dirname, "../", "uploads/users", fileName);
  req.files.profile_image.mv(folderPath, (err) => {
    if (err) {
      console.log("err :>> ", err);
      res.send({ error: err });
    }
    // console.log("Image upload is successful");
    // res.send("Image upload is successful");
    const updatedUser = UsersService.update(req.user._id, {
      profile_image: fileName,
    });
    res.send("User data updated with profile image");
  });
  // console.log("req.files :>> ", req.files);
  // 2 - Upload Process
  // 3 - DB Save Process
  // 4 - Responses
};
module.exports = {
  getAllUsers,
  findUser,
  createUser,
  removeUser,
  login,
  getUserProjects,
  resetPassword,
  updateUserData,
  changePassword,
  updateProfileImage,
  signInWithGoogle,
  signInWithPopup,
};
