<template lang="pug">
ul.donate-request__list
  DonateRequestListItem(v-for="item in requestList" :key="item.id" :requestItem="item")
</template>
<script setup>
import { inject } from "vue";
import DonateRequestListItem from "./DonateRequestListItem.vue";
const appAxios = inject("AppAxios");
</script>
