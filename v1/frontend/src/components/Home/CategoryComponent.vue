<template lang="pug">
div.container.container--full.category 
  h2.category__title Help in #[span 7] categories all around the #[span World]
  CategoryListComponent
</template>
<script setup>
import { ref, provide } from "vue";
import CategoryListComponent from "./CategoryListComponent.vue";

const categoryList = ref([
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
]);
/*"#1D81B9",
  "#B91D1D",
  "#B3CC17",
  "#0D921B",
  "#6A1CA6",
  "#0F4632",
  "#A8690B",*/
provide("CategoryListData", categoryList);
</script>
<style lang="scss">
.category {
  &__title {
    font-size: 3.2rem;
    font-weight: 500;
    font-style: italic;
    text-align: center;
    margin-bottom: 3.6rem;
    & span {
      color: var(--color-primary-green);
      font-weight: 800;
    }
  }
}
</style>
