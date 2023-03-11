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
const PORT = process.env.APP_PORT || 5173;
const app = express();

// const TEMP_DOMAIN = "http://localhost:5173";
// const stripe = require('stripe')('sk_test_51MeWRlHUYABYDzrmcrBrgT0XmuhYwfJafZstytkoaWov6ZFreRDGZ3pypN7Hi4zSqNRjNHG4Fi1a86CPV4IXHN44000brTb2ow');

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
  res.render("index");
});
// app.post("/checkout", async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//         price: 'price_1MkI2FHUYABYDzrm3UHtdMy7',
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: `${YOUR_DOMAIN}/success.html`,
//     cancel_url: `${YOUR_DOMAIN}/cancel.html`,
//     automatic_tax: {enabled: true},
//   });
//   res.redirect(303, session.url);
// });
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

