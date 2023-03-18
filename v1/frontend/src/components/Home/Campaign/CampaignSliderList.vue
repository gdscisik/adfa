<template lang="pug">
div.campaign-slider-list
  CampaignSliderItem(v-for="item in _getFirstFiveCampaigns()" :key="item.id" :campaignItem="item")
</template>
0
<script setup>
import CampaignSliderItem from "./CampaignSliderItem.vue";
import { inject, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const appAxios = inject("AppAxios");

onMounted(() => {
  appAxios.get("/campaigns").then((response) => {
    console.log("response.data :>> ", response.data);
    store.commit("_setCampaigns", response.data);
  });
});
const _getFirstFiveCampaigns = () => {
  return store.getters._getCampaigns.slice(0, 5);
};
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
