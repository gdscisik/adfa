<template lang="pug">
div.campaign-slider-list
  CampaignSliderItem
  CampaignSliderItem
  CampaignSliderItem
  CampaignSliderItem
  CampaignSliderItem
</template>
<script setup>
import CampaignSliderItem from "./CampaignSliderItem.vue";
</script>
<style lang="scss">
.campaign-slider-list {
  // display: inline;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  // white-space: nowrap;
  gap: 2.4rem;
  padding: 1.4rem 2.8rem;
}
</style>
