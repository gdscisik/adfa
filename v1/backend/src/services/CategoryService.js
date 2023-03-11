const BaseService = require("./BaseService.js");
const CategoryModel = require("../models/CategoryModel");

class CategoryService extends BaseService {
  model = CategoryModel;
}
module.exports = new CategoryService();
