const { connectDatabase } = require("./database-connection.js");
// const { printKeys } = require("./stripe-connection.js");
module.exports = () => {
  connectDatabase();
  // printKeys();
};

