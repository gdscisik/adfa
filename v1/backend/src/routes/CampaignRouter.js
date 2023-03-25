// Validate Middleware
// const validate = require("../middlewares/Validate.js");
// Validations
// const validationSchemas = require("../validations/CampaignValidator.js");
// const authenticateToken = require("../middlewares/AuthenticateToken.js");
const express = require("express");
const router = express.Router();
const {
  getAll,
  getById,
  create,
  remove,
} = require("../controllers/CampaignsController.js");

router.route("/").get(getAll);
// router
//   .route("/")
//   .post(
//     authenticateToken,
//     validate(validationSchemas.createValidation),
//     create,
//   );
router.get("/:id", getById);
// router.route("/:id").delete(authenticateToken, remove);

module.exports = router;

/*// Validate Middleware
const validate = require("../middlewares/Validate.js");
// Validations
const validationSchemas = require("../validations/CampaignValidator.js");
const authenticateToken = require("../middlewares/AuthenticateToken.js");
const express = require("express");
const router = express.Router();
const {
  getAll,
  getById,
  create,
  remove,
  update,
} = require("../controllers/CampaignsController.js");

router.route("/").get(authenticateToken, getAll);
router
  .route("/")
  .post(
    authenticateToken,
    validate(validationSchemas.createValidation),
    create,
  );
router.get("/:id", getById);
// router.delete("/", remove);
router.route("/:id").delete(authenticateToken, remove);
// router
//   .route("/update/:id")
//   .patch(
//     authenticateToken,
//     validate(validationSchemas.updateValidation),
//     update,
//   );

module.exports = router;

*/

