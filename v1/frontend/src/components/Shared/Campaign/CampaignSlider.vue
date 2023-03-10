<template lang="pug">
div.campaign-slider
  CampaignSliderList
</template>
<style lang="scss">
.campaign-slider {
  padding: 2.4rem;
  overflow-x: scroll;
  overflow-y: hidden;
  margin: 5.4rem auto;
}
</style>

<script setup>
import { ref } from "vue";
import CampaignSliderList from "./CampaignSliderList.vue";

const sliderCampaignData = ref([
  {
    categoryId: 1,
    campaignTitle: "Education",
    campaignDescription:
      "Lorem ipsum dolor sit amet, dolor lorem ipsum sit amet.",
    image_source: "../../../src/assets/images/categories/education.png",
    progress: 75,
  },
  {
    categoryId: 2,
    campaignTitle: "Food",
    campaignDescription:
      "Lorem ipsum dolor sit amet, dolor lorem ipsum sit amet.",
    image_source: "../../../src/assets/images/categories/food.png",
    progress: 75,
  },
  {
    categoryId: 3,
    campaignTitle: "Personal Needs",
    campaignDescription:
      "Lorem ipsum dolor sit amet, dolor lorem ipsum sit amet.",
    image_source: "../../../src/assets/images/categories/personal-needs.png",
    progress: 75,
  },
  {
    categoryId: 4,
    campaignTitle: "Natural Disasters",
    campaignDescription:
      "Lorem ipsum dolor sit amet, dolor lorem ipsum sit amet.",
    image_source: "../../../src/assets/images/categories/disasters.png",
    progress: 75,
  },
  {
    categoryId: 5,
    campaignTitle: "Scholarship",
    campaignDescription:
      "Lorem ipsum dolor sit amet, dolor lorem ipsum sit amet.",
    image_source: "../../../src/assets/images/categories/scholarships.png",
    progress: 75,
  },
  {
    categoryId: 6,
    campaignTitle: "Institutions",
    campaignDescription:
      "Lorem ipsum dolor sit amet, dolor lorem ipsum sit amet.",
    image_source: "../../../src/assets/images/categories/institutions.png",
    progress: 75,
  },
  {
    categoryId: 7,
    campaignTitle: "Clothes",
    campaignDescription:
      "Lorem ipsum dolor sit amet, dolor lorem ipsum sit amet.",
    image_source: "../../../src/assets/images/categories/clothes.png",
    progress: 75,
  },
]);
</script>
