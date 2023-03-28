<template lang="pug">
div.category__list 
  CategoryListItem(v-for="categoryItem in categoryList" :key="categoryItem.id" :categoryItem="categoryItem")
</template>
<script setup>
import CategoryListItem from "./CategoryListItem.vue";
import { inject } from "vue";
const categoryList = inject("CategoryListData");
</script>
<style lang="scss">
.category__list {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.4rem;
}
</style>
