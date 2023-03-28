// Validate Middleware
// const validate = require("../middlewares/Validate.js");
// Validations
// const validationSchemas = require("../validations/DonateRequestValidator.js");
const express = require("express");
const router = express.Router();
const {
  getAll,
  getById,
  create,
  remove,
} = require("../controllers/DonateRequestsController.js");

router.get("/", getAll);
router.get("/:id", getById);
// router.route("/").post(validate(validationSchemas.createValidation), create);
router.post("/", create);
// router.delete("/", remove);
router.delete("/:id", remove);

module.exports = router;

