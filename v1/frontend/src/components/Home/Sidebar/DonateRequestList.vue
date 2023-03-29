<template lang="pug">
ul.donate-request__list
  DonateRequestListItem(v-for="item in _getDonateRequests()" :key="item.donateRequestId" :requestItem="item")
</template>
<script setup>
import { useStore } from "vuex";
import DonateRequestListItem from "./DonateRequestListItem.vue";
const store = useStore();

const _getDonateRequests = () => {
  // return store.getters._getDonateRequests.slice(0, 5);
  return store.getters._getDonateRequests;
};

const _getCategoryList = () => {
  return store.getters._getCategoryList;
};
// const 
</script>
