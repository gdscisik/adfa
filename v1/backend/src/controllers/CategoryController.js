const CategoryService = require("../services/CategoryService.js");
const { Query } = require("firefose");
const getAll = async (req, res) => {
  const query = new Query();
  const categories = await CategoryService.findAll(query);
  res.send(categories);
};
const find = async (req, res) => {
  // const query = new Query().where("categoryId", '==', `${req.params.id}`);
  const query = new Query().where("categoryId", "==", `${req.params.id}`);
  const category = await CategoryService.findById(query);
  res.send(category);
};
const create = async (req, res) => {};
module.exports = {
  getAll,
  find,
  create,
};

