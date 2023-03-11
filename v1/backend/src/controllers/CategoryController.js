const CategoryService = require("../services/CategoryService.js");
const { Query } = require("firefose");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../scripts/utils/Tokens.js");

const getAllCategories = async (req, res) => {
  const query = new Query();
  const categories = await CategoryService.findAll(query);
  res.send({ categories: categories });
};
const findCategory = async (req, res) => {
  // const query = new Query().where("categoryId", '==', `${req.params.id}`);
  const query = new Query().where("categoryId", '==', 1);
  const category = await CategoryService.findById(query);
  console.log('query :>> ', query);
  console.log('category :>> ', category);
  res.send({ category: category });
};

/* const createCategory = async (req, res) => {
  //const query = new Query().where("categoryId", '==', `${req.params.id}`);
  const category = {
    categoryId: 7,
    imageSource: "https://images.unsplash.com/photo-1542459025-05b107028098?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1077&q=80",
    name: "Clothes",
    description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    brief: "Lorem ipsum dolor sit amet.",
    categoryColor: "#A8690B",
    categoryBackgroundColor: "#A8690B4D",
  }
  await CategoryService.add(category);
  res.send({ category: category });
}; */
const createCategory = async (req, res) => {
  res.send("Merhabalar EQ");
}
module.exports = {
  getAllCategories,
  findCategory,
  createCategory
};


