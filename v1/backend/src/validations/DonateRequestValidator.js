const Joi = require("joi");
const createValidation = Joi.object({
  requestTitle: Joi.string().required().min(10),
  requestDescription: Joi.string().required().min(10).max(500),
});
const updateValidation = Joi.object({
  requestTitle: Joi.string().required().min(10),
  requestDescription: Joi.string().required().min(10).max(500),
});
module.exports = {
  createValidation,
  updateValidation,
};
