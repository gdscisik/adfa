const express = require("express");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const helmet = require("helmet");
const path = require("path");
const cors = require("cors");
const config = require("./config");
const loaders = require("./loaders");
// const events = require("./scripts/events");
const {
  CampaignRouter,
  DonateRequestRouter,
  UserRouter,
  CategoryRouter,
} = require("./routes");
config();
loaders();
// events();
const PORT = process.env.BACKEND_PORT || 3000;
// const PORT = 3232 || 5173;
const app = express();

// const TEMP_DOMAIN = "http://localhost:5173";
// const stripe = require('stripe')('sk_test_51MeWRlHUYABYDzrmcrBrgT0XmuhYwfJafZstytkoaWov6ZFreRDGZ3pypN7Hi4zSqNRjNHG4Fi1a86CPV4IXHN44000brTb2ow');
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "./", "uploads")));
app.use(express.json());
app.use(helmet());
app.use(fileUpload());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "pug");

app.use("/campaigns", CampaignRouter);
app.use("/requests", DonateRequestRouter);
app.use("/users", UserRouter);
app.use("/categories", CategoryRouter);

app.get("/", async (req, res) => {
  res.send("Welcome to the adfa.world");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
