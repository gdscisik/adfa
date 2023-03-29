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
const findCategoryColor = (itemName) => {
  const object = store.getters._getCategoryList.filter(
    (category) => category.name == itemName,
  );
  return object;
};
const kebabCase = (str) => {
  return str.toLowerCase().replace(/[\s&]+/g, "-");
};
provide("KebabCaseGenerator", kebabCase);
provide("CategoryColorFinder", findCategoryColor);
/* const categoryList = ref([
  {
    id: 1,
    name: "Education",
    description: "Lorem ipsum dolor sit amet, dolor lorem ipsum sit amet.",
    image_source: "../../../src/assets/images/categories/education.png",
    categoryColor: "#1D81B9",
    backgroundCategoryColor: "#1D81B94D",
  },
  {
    id: 2,
    name: "Food",
    description: "Lorem ipsum dolor sit amet, dolor lorem ipsum sit amet.",
    image_source: "../../../src/assets/images/categories/food.png",
    categoryColor: "#B91D1D",
    backgroundCategoryColor: "#B91D1D4D",
  },
  {
    id: 3,
    name: "Personal Needs",
    description: "Lorem ipsum dolor sit amet, dolor lorem ipsum sit amet.",
    image_source: "../../../src/assets/images/categories/personal-needs.png",
    categoryColor: "#B3CC17",
    backgroundCategoryColor: "#B3CC174D",
  },
  {
    id: 4,
    name: "Natural Disasters",
    description: "Lorem ipsum dolor sit amet, dolor lorem ipsum sit amet.",
    image_source: "../../../src/assets/images/categories/disasters.png",
    categoryColor: "#0D921B",
    backgroundCategoryColor: "#0D921B4D",
  },
  {
    id: 5,
    name: "Scholarship",
    description: "Lorem ipsum dolor sit amet, dolor lorem ipsum sit amet.",
    image_source: "../../../src/assets/images/categories/scholarships.png",
    categoryColor: "#6A1CA6",
    backgroundCategoryColor: "#6A1CA64D",
  },
  {
    id: 6,
    name: "Institutions",
    description: "Lorem ipsum dolor sit amet, dolor lorem ipsum sit amet.",
    image_source: "../../../src/assets/images/categories/institutions.png",
    categoryColor: "#0F4632",
    backgroundCategoryColor: "#0F46324D",
  },
  {
    id: 7,
    name: "Clothes",
    description: "Lorem ipsum dolor sit amet, dolor lorem ipsum sit amet.",
    image_source: "../../../src/assets/images/categories/clothes.png",
    categoryColor: "#A8690B",
    backgroundCategoryColor: "#A8690B4D",
  },
]); */
/*"#1D81B9",
  "#B91D1D",
  "#B3CC17",
  "#0D921B",
  "#6A1CA6",
  "#0F4632",
  "#A8690B",*/
// provide("CategoryListData", categoryList);
</script>
