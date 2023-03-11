const express = require("express");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const helmet = require("helmet");
const path = require("path");
const config = require("./config");
const loaders = require("./loaders");
// const events = require("./scripts/events");
const auth = require('firebase/auth');
const { signInWithPopup, GoogleAuthProvider } = require("firebase/auth");
// const provider = new GoogleAuthProvider();
const { CampaignRouter, DonateRequestRouter, UserRouter, CategoryRouter } = require("./routes");
config();
loaders();
// events();
// const PORT = process.env.APP_PORT || 3232;
const PORT = 5173 || 3232;
const app = express();
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "./", "uploads")));
app.use(express.json());
app.use(helmet());
app.use(fileUpload());
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "pug");

app.use("/campaigns", CampaignRouter);
app.use("/requests", DonateRequestRouter);
app.use("/users", UserRouter);
app.use("/categories", CategoryRouter)
// app.use("/login/google", UserRouter)

const DonateRequestService = require('./services/DonateRequestService');
const UsersService = require('./services/UsersService');
const CampaignService = require('./services/CampaignService');
app.get("/", async (req, res) => {
  res.render("index");
// app.post("/login/google", async (auth, provider) => {
//  await auth.signInWithPopup(auth, provider)
//   .then((result) => {
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     res.send("ok");
//   })
//   .catch(error => {
//     console.error(error);
//   })
// })

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});