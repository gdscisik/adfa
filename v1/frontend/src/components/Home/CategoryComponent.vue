<template lang="pug">
div.container.container--full.category 
  h2.category__title Help in #[span 7] categories all around the #[span World]
  CategoryListComponent
</template>
<script setup>
import { ref } from "vue";
import CategoryListComponent from "./CategoryListComponent.vue";
</script>
<style lang="scss">
.category {
  &__title {
    font-size: 3.2rem;
    font-weight: 500;
    font-style: italic;
    text-align: center;
    margin-bottom: 3.6rem;
    & span {
      color: var(--color-primary-green);
      font-weight: 800;
    }
  }
}
</style>
