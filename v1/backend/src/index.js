const express = require("express");
const fileUpload = require("express-fileupload");
const helmet = require("helmet");
const path = require("path");
const config = require("./config");
const loaders = require("./loaders");
const events = require("./scripts/events");
const { CampaignRouter, DonateRequestRouter, UserRouter } = require("./routes");
config();
loaders();
events();
const PORT = process.env.APP_PORT || 3232;
const app = express();
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

app.get("/", (req, res) => {
  //res.send("osman");
  const myData = {
    email: req.body.email,
    username: req.body.username,
  };
  console.log('data get :>> ', myData);
  res.render("index", { data: myData });
  res.send(myData);
});

app.post("/deneme", async (req, res) => {
  //res.send("osman");
  const myData = {
    email: req.body.email,
    username: req.body.username,
  };

  console.log('deneme post :>> ', myData);
  
  res.send(myData);
  // res.render("deneme", {data: myData});
});
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

// var firebaseRef = firebase.database().ref('emails');
// document.querySelector('#button button--help-anyone').addEventListener('click', () => {
//     const email = document.getElementById('email').value;
//     firebaseRef.push("dyyenice@gmail.com");
// });

// var firebaseRef = firebase.database().ref('emails');
// const form = document.querySelector('#send');
// form.addEventListener('click', (e) => {
//   e.preventDefault();
//   const email = document.getElementById('email').value;
//   firebaseRef.push(email);
// });

