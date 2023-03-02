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

const DonateRequestService = require('./services/DonateRequestService');
const UsersService = require('./services/UsersService');
const CampaignService = require('./services/CampaignService');
app.get("/", async (req, res) => {
  res.render("index");
})

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});