const Joi = require("joi");
const createValidation = Joi.object({
  title: Joi.string().required().min(10),
  description: Joi.string().required().min(10).max(500),
  image: Joi.string().optional(),
  targetAmount: Joi.number().required().min(1).max(10000000),
});
const updateValidation = Joi.object({
  title: Joi.string().required().min(10),
  description: Joi.string().required().min(10).max(500),
  image: Joi.string().optional(),
  targetAmount: Joi.number().required().min(1).max(10000000),
});

module.exports = {
  createValidation,
  updateValidation,
};
