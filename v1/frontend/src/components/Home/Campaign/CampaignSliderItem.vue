<template lang="pug">
div.campaign-slider-list-item
  img(:src="props.campaignItem.imageSource")
  RouterLink(:to='`/campaigns/${props.campaignItem.id}`') 
    h3 {{ props.campaignItem.title }}   
  p {{ props.campaignItem.description }} 
  DonateProgressBar
  DonateButtonComponent.button--donate(:campaignItemId = "props.campaignItem.id")
</template>
<script setup>
import DonateProgressBar from "@/components/Shared/DonateProgressBar.vue";
import DonateButtonComponent from "@/components/Shared/Buttons/DonateButtonComponent.vue";
const props = defineProps({
  campaignItem: {
    type: Object,
    required: true,
    default: {},
  },
});
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
  // box-shadow: 1.5rem 1rem 10rem rgba($color: #000000, $alpha: 0.05);
  // border: 2px solid var(--color-primary-green);
  background-color: var(--color-header-background);
  padding: 1.8rem;
  & img {
    width: 100%;
    border-radius: 0.5rem;
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
