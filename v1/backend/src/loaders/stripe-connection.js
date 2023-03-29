/* if (process.env.NODE_ENV !== "production") {
  require("dotenv").load();
} */
require("dotenv").config();
const stripePublishableKey = process.env.STRIPE_PUBLISHABLE_KEY || "Osman";
const stripeSecretKey = process.env.STRIPE_SECRET_KEY || "Osman";
const printKeys = () => {
  console.log("stripePublishableKey :>> ", stripePublishableKey);
  console.log("stripeSecretKey :>> ", stripeSecretKey);
};

module.exports = {
  printKeys,
};
