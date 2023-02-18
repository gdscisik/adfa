<script setup>
import HeaderComponent from "../components/Shared/HeaderComponent.vue";
import Carousel from "@/components/Home/Carousel.vue";
import DonateRequestSidebar from "@/components/Shared/Sidebar/DonateRequestSidebar.vue";
import WhatWeAreComponent from "@/components/Home/WhatWeAreComponent.vue";
import CategoryComponent from "@/components/Home/CategoryComponent.vue";
</script>
<template lang="pug">
HeaderComponent
Carousel
main.container.grid.grid--2-1
  section.section.section--what-we-are
    WhatWeAreComponent
    CategoryComponent
  DonateRequestSidebar
</template>
<style lang="scss"></style>
