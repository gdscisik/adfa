<template lang="pug">
aside.donate-request
  h3.donate-request__title Donate Requests 
  DonateRequestList
  SeeMoreDonateRequestButton
</template>
<script setup>
import { inject, provide, ref } from "vue";
import DonateRequestList from "./DonateRequestList.vue";
import SeeMoreDonateRequestButton from "@/components/Shared/SeeMoreDonateRequestButton.vue";

const donateRequestList = inject("RequestList");
</script>
<style lang="scss">
.donate-request {
  padding: 2.4rem;
  max-height: 120rem; // TODO
  overflow-x: hidden; // TODO
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
