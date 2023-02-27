<template lang="pug">
aside.donate-request
  h3.donate-request__title Donate Requests 
  DonateRequestList
</template>
<script setup>
import { provide, ref } from "vue";
import DonateRequestList from "./DonateRequestList.vue";

const donateRequestList = ref([
  {
    id: 1,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    //user_id: 1,
    user_image: "../../../../src/assets/images/user_image.jpg",
    //category_id: 1,
    category_color: "#1D81B9",
  },
  {
    id: 2,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    user_image: "../../../../src/assets/images/user_image.jpg",
    //category_id: 1,
    category_color: "#B91D1D",
  },
  {
    id: 3,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    user_image: "../../../../src/assets/images/user_image.jpg",
    //category_id: 1,
    category_color: "#B3CC17",
  },
  {
    id: 4,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    user_image: "../../../../src/assets/images/user_image.jpg",
    //category_id: 1,
    category_color: "#0D921B",
  },
  {
    id: 5,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    user_image: "../../../../src/assets/images/user_image.jpg",
    //category_id: 1,
    category_color: "#6A1CA6",
  },
  {
    id: 6,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    user_image: "../../../../src/assets/images/user_image.jpg",
    //category_id: 1,
    category_color: "#0F4632",
  },
  {
    id: 7,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    user_image: "../../../../src/assets/images/user_image.jpg",
    //category_id: 1,
    category_color: "#A8690B",
  },
  {
    id: 8,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    //user_id: 1,
    user_image: "../../../../src/assets/images/user_image.jpg",
    //category_id: 1,
    category_color: "#1D81B9",
  },
  {
    id: 9,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    user_image: "../../../../src/assets/images/user_image.jpg",
    //category_id: 1,
    category_color: "#B91D1D",
  },
  {
    id: 10,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    user_image: "../../../../src/assets/images/user_image.jpg",
    //category_id: 1,
    category_color: "#B3CC17",
  },
  {
    id: 11,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    user_image: "../../../../src/assets/images/user_image.jpg",
    //category_id: 1,
    category_color: "#0D921B",
  },
  {
    id: 12,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    user_image: "../../../../src/assets/images/user_image.jpg",
    //category_id: 1,
    category_color: "#6A1CA6",
  },
  {
    id: 13,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    user_image: "../../../../src/assets/images/user_image.jpg",
    //category_id: 1,
    category_color: "#0F4632",
  },
  {
    id: 14,
    title: "I need ... for ...",
    description: "To be able to finish my education, I need ...",
    user_image: "../../../../src/assets/images/user_image.jpg",
    //category_id: 1,
    category_color: "#A8690B",
  },
]);
provide("RequestList", donateRequestList);
</script>
<style lang="scss">
.donate-request {
  padding: 2.4rem;
  overflow: hidden;
  // margin-bottom: 10rem;
  margin: {
    top: 3.6rem;
    bottom: 3.6rem;
  }
  box-shadow: 0.5rem 0.5rem 2rem rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  &__title {
    font-size: 1.8rem;
    // margin-bottom: 1.2rem;
  }
}
</style>
