// Validate Middleware
const validate = require("../middlewares/Validate.js");
// Validations
const validationSchemas = require("../validations/UserValidator.js");
const authenticateToken = require("../middlewares/AuthenticateToken.js");
const express = require("express");
const router = express.Router();
const { Query } = require("firefose");
const {
  getAllUsers,
  findUser,
  createUser,
  removeUser,
  login,
  register,
  getUserProjects,
  resetPassword,
  updateUserData,
  changePassword,                                                                                                                                                                                                                               
  updateProfileImage,
} = require("../controllers/UsersController.js");

const UsersService = require("../services/UsersService.js");
router.get("/", getAllUsers);
// router.get("/users", getAllUsers);
// router.post("/users", findUser);
router.post("/", async (req, res) => {
  const query = new Query().where("email", "==", req.body.email);
  const user = await UsersService.findById(query);    
  console.log('user :>> ', user);
  res.render("index", {users: user});
;});
router.get("/login", findUser);
router.post("/users/register").post(register);
// router
//   .route("/")
//   .post(validate(validationSchemas.createValidation), createUser);

router
  .route("/")
  .patch(
    authenticateToken,
    validate(validationSchemas.updateValidation),
    updateUserData
  );

router.route("/projects").get(authenticateToken, getUserProjects);
// router.route("/login").post(validate(validationSchemas.loginValidation), login);

// router.route("/login")
router.route("/login").post(login);
// router.route("/login/:email/:password").post(login);
router
  .route("/reset-password")
  .post(validate(validationSchemas.resetPasswordValidation), resetPassword);

router
  .route("/change-password")
  .post(
    authenticateToken,
    validate(validationSchemas.changePasswordValidation),
    changePassword
  );

router.route("/update-profile-image").post(
  authenticateToken,
  // validate(validationSchemas.changePasswordValidation),
  updateProfileImage
);

router.route("/:id").delete(authenticateToken, removeUser);

router.get("/:id", findUser);

module.exports = router;
