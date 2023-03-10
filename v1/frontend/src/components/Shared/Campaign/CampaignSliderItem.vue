<template lang="pug">
div.campaign-slider-list-item
  img(src="@/assets/images/slider/slider-8.jpg")
  //- h3 #[RouterLink(to=`/campaigns/${campaign.campaignId}`) title] 
  h3 #[RouterLink(to=`/campaigns/15`) title] 
  p lorem ipsum dolor sit amet lorem ipsum dolor sit amet adsas adasd asdasd asdasdas 
  DonateProgressBar
  DonateButtonComponent.button--donate(:campaignItem = "item")
</template>
<script setup>
import DonateProgressBar from "../DonateProgressBar.vue";
import DonateButtonComponent from "../DonateButtonComponent.vue";
</script>
<style lang="scss">
.campaign-slider-list-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.4rem;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 1.5rem 1rem 10rem rgba($color: #000000, $alpha: 0.15);
  padding: 1.2rem 1.4rem;
  & img {
    width: 100%;
  }
  & h3 {
    width: 100%;
    font-size: 1.8rem;
  }
  & p {
    // white-space: initial;
    // display: inline-block;
  }
}
</style>
