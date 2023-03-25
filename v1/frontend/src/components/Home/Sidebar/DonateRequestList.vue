<template lang="pug">
ul.donate-request__list
  DonateRequestListItem(v-for="item in _getDonateRequests" :key="item.donateRequestId" :requestItem="item")
</template>
<script setup>
import { inject, onMounted } from "vue";
import { useStore } from "vuex";
import DonateRequestListItem from "./DonateRequestListItem.vue";
const appAxios = inject("AppAxios");
const store = useStore();
onMounted(() => {
  appAxios.get("/requests").then((response) => {
    console.log("donateRequests :>> ", response.data);
    store.commit("_setDonateRequests", response.data);
  });
});
const _getDonateRequests = () => {
  // return store.getters._getDonateRequests.slice(0, 5);
  return store.getters._getDonateRequests;
};
</script>
