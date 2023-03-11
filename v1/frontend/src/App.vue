<template lang="pug">
RouterView
</template>
<script setup>
import { provide, ref } from "vue";

const kebabCase = (str) => {
  return str.toLowerCase().replace(/[\s&]+/g, "-");
};

const donateRequestList = ref([
  {
    id: 1,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    description_long:
      "To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...",
    user_image: "./src/assets/images/user_image.jpg",
    categoryList: [1, 3, 6],
    category_color: "#1D81B9",
  },
  {
    id: 2,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    description_long:
      "To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...",
    user_image: "./src/assets/images/user_image.jpg",
    user_image: "./src/assets/images/user_image.jpg",
    categoryList: [1, 3, 6],
    category_color: "#B91D1D",
  },
  {
    id: 3,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    description_long:
      "To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...",
    user_image: "./src/assets/images/user_image.jpg",
    user_image: "./src/assets/images/user_image.jpg",
    categoryList: [1, 3, 6],
    category_color: "#B3CC17",
  },
  {
    id: 4,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    description_long:
      "To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...",
    user_image: "./src/assets/images/user_image.jpg",
    user_image: "./src/assets/images/user_image.jpg",
    categoryList: [1, 3, 6],
    category_color: "#0D921B",
  },
  {
    id: 5,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    description_long:
      "To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...",
    user_image: "./src/assets/images/user_image.jpg",
    user_image: "./src/assets/images/user_image.jpg",
    categoryList: [1, 3, 6],
    category_color: "#6A1CA6",
  },
  {
    id: 6,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    description_long:
      "To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...",
    user_image: "./src/assets/images/user_image.jpg",
    user_image: "./src/assets/images/user_image.jpg",
    categoryList: [1, 3, 6],
    category_color: "#0F4632",
  },
  {
    id: 7,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    description_long:
      "To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...",
    user_image: "./src/assets/images/user_image.jpg",
    user_image: "./src/assets/images/user_image.jpg",
    categoryList: [1, 3, 6],
    category_color: "#A8690B",
  },
  {
    id: 8,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    description_long:
      "To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...",
    user_image: "./src/assets/images/user_image.jpg",
    user_image: "./src/assets/images/user_image.jpg",
    categoryList: [1, 3, 6],
    category_color: "#1D81B9",
  },
  {
    id: 9,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    description_long:
      "To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...",
    user_image: "./src/assets/images/user_image.jpg",
    user_image: "./src/assets/images/user_image.jpg",
    categoryList: [1, 3, 6],
    category_color: "#B91D1D",
  },
  {
    id: 10,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    description_long:
      "To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...",
    user_image: "./src/assets/images/user_image.jpg",
    user_image: "./src/assets/images/user_image.jpg",
    categoryList: [1, 3, 6],
    category_color: "#B3CC17",
  },
  {
    id: 11,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    description_long:
      "To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...",
    user_image: "./src/assets/images/user_image.jpg",
    user_image: "./src/assets/images/user_image.jpg",
    categoryList: [1, 3, 6],
    category_color: "#0D921B",
  },
  {
    id: 12,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    description_long:
      "To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...",
    user_image: "./src/assets/images/user_image.jpg",
    user_image: "./src/assets/images/user_image.jpg",
    categoryList: [1, 3, 6],
    category_color: "#6A1CA6",
  },
  {
    id: 13,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    description_long:
      "To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...",
    user_image: "./src/assets/images/user_image.jpg",
    user_image: "./src/assets/images/user_image.jpg",
    categoryList: [1, 3, 6],
    category_color: "#0F4632",
  },
  {
    id: 14,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    description_long:
      "To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...",
    user_image: "./src/assets/images/user_image.jpg",
    user_image: "./src/assets/images/user_image.jpg",
    categoryList: [1, 3, 6],
    category_color: "#A8690B",
  },
  {
    id: 8,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    description_long:
      "To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...",
    user_image: "./src/assets/images/user_image.jpg",
    user_image: "./src/assets/images/user_image.jpg",
    categoryList: [1, 3, 6],
    category_color: "#1D81B9",
  },
  {
    id: 9,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    description_long:
      "To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...",
    user_image: "./src/assets/images/user_image.jpg",
    user_image: "./src/assets/images/user_image.jpg",
    categoryList: [1, 3, 6],
    category_color: "#B91D1D",
  },
  {
    id: 10,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    description_long:
      "To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...",
    user_image: "./src/assets/images/user_image.jpg",
    user_image: "./src/assets/images/user_image.jpg",
    categoryList: [1, 3, 6],
    category_color: "#B3CC17",
  },
  {
    id: 11,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    description_long:
      "To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...",
    user_image: "./src/assets/images/user_image.jpg",
    user_image: "./src/assets/images/user_image.jpg",
    categoryList: [1, 3, 6],
    category_color: "#0D921B",
  },
  {
    id: 12,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    description_long:
      "To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...",
    user_image: "./src/assets/images/user_image.jpg",
    user_image: "./src/assets/images/user_image.jpg",
    categoryList: [1, 3, 6],
    category_color: "#6A1CA6",
  },
  {
    id: 13,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    description_long:
      "To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...",
    user_image: "./src/assets/images/user_image.jpg",
    user_image: "./src/assets/images/user_image.jpg",
    categoryList: [1, 3, 6],
    category_color: "#0F4632",
  },
  {
    id: 14,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    description_long:
      "To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...",
    user_image: "./src/assets/images/user_image.jpg",
    user_image: "./src/assets/images/user_image.jpg",
    categoryList: [1, 3, 6],
    category_color: "#A8690B",
  },
]);
provide("KebabCaseGenerator", kebabCase);
provide("RequestList", donateRequestList);
</script>
