// Validate Middleware
// const validate = require("../middlewares/Validate.js");
// Validations
// const validationSchemas = require("../validations/UserValidator.js");
const authenticateToken = require("../middlewares/AuthenticateToken.js");
const express = require("express");
const router = express.Router();
const {
  getAllCategories,
  findCategory,
  createCategory
} = require("../controllers/CategoryController.js");

router.get("/", getAllCategories);

router.get("/:id", findCategory);
router.post("/", createCategory);

module.exports = router;
