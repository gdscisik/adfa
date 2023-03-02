<script setup>
import HeaderComponent from "../components/Shared/Header/HeaderComponent.vue";
import Carousel from "@/components/Home/Carousel.vue";
import DonateRequestSidebar from "@/components/Shared/Sidebar/DonateRequestSidebar.vue";
import WhatWeAreComponent from "@/components/Home/WhatWeAreComponent.vue";
import CategoryComponent from "@/components/Home/CategoryComponent.vue";
import CampaignSlider from "../components/Shared/Campaign/CampaignSlider.vue";
import FooterComponent from "../components/Shared/Footer/FooterComponent.vue";
</script>
<template lang="pug">
HeaderComponent
Carousel
main.container.grid.grid--2-1
  section.section.section--what-we-are
    WhatWeAreComponent
    CategoryComponent
  DonateRequestSidebar
  CampaignSlider
FooterComponent
</template>
<style lang="scss"></style>
