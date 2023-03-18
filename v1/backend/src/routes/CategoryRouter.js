// Validate Middleware
// const validate = require("../middlewares/Validate.js");
// Validations
// const validationSchemas = require("../validations/UserValidator.js");
const authenticateToken = require("../middlewares/AuthenticateToken.js");
const express = require("express");
const router = express.Router();
const {
  getAll,
  find,
  create,
} = require("../controllers/CategoryController.js");

router.get("/", getAll);

router.get("/:id", find);
router.post("/", create);

module.exports = router;

