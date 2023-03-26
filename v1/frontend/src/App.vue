<template lang="pug">
RouterView
</template>
<script setup>
import { inject, onMounted, provide, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const appAxios = inject("AppAxios");

onMounted(() => {
  appAxios.get("/campaigns").then((response) => {
    // console.log("response.data :>> ", response.data);
    store.commit("_setCampaigns", response.data);
  });
  appAxios.get("/categories").then((response) => {
    store.commit("_setCategories", response.data);
  });
  appAxios.get("/requests").then((response) => {
    store.commit("_setDonateRequests", response.data);
  });
});

const kebabCase = (str) => {
  return str.toLowerCase().replace(/[\s&]+/g, "-");
};
provide("KebabCaseGenerator", kebabCase);
// provide("RequestList", donateRequestList);
/* const donateRequestList = ref([
  {
    id: 1,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    description_long:
      "To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ... To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...To be able to finish my education, I need ...",
    user_image: "@/assets/images/user_image.jpg",
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
]); */
</script>
