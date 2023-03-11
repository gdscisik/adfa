
const { Schema, SchemaTypes, Model } = require("firefose");
const { String, Number } = SchemaTypes;

/* const categoryList = ref([
  {
    id: 1,
    name: "Education",
    description: "Lorem ipsum dolor sit amet, dolor lorem ipsum sit amet.",
    image_source: "../../../src/assets/images/categories/education.png",
    category_color: "#1D81B9",
  },
  {
    id: 2,
    name: "Food",
    description: "Lorem ipsum dolor sit amet, dolor lorem ipsum sit amet.",
    image_source: "../../../src/assets/images/categories/food.png",
    category_color: "#B91D1D",
  },
  {
    id: 3,
    name: "Personal Needs",
    description: "Lorem ipsum dolor sit amet, dolor lorem ipsum sit amet.",
    image_source: "../../../src/assets/images/categories/personal-needs.png",
    category_color: "#B3CC17",
  },
  {
    id: 4,
    name: "Natural Disasters",
    description: "Lorem ipsum dolor sit amet, dolor lorem ipsum sit amet.",
    image_source: "../../../src/assets/images/categories/disasters.png",
    category_color: "#0D921B",
  },
  {
    id: 5,
    name: "Scholarship",
    description: "Lorem ipsum dolor sit amet, dolor lorem ipsum sit amet.",
    image_source: "../../../src/assets/images/categories/scholarships.png",
    category_color: "#6A1CA6",
  },
  {
    id: 6,
    name: "Institutions",
    description: "Lorem ipsum dolor sit amet, dolor lorem ipsum sit amet.",
    image_source: "../../../src/assets/images/categories/institutions.png",
    category_color: "#0F4632",
  },
  {
    id: 7,
    name: "Clothes",
    description: "Lorem ipsum dolor sit amet, dolor lorem ipsum sit amet.",
    image_source: "../../../src/assets/images/categories/clothes.png",
    category_color: "#A8690B",
  },
]); */
const CategorySchema = new Schema({
  categoryId: {
    type: Number,
    required: true,
  },
  imageSource: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  brief: {
    type: String,
    required: true,
  },
  categoryColor: {
    type: String,
    required: true,
  },
  categoryBackgroundColor: {
    type: String,
    required: true,
  },
}, {timestamp: true});

const CategoryModel = new Model("Category", CategorySchema);
module.exports = CategoryModel;