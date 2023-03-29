<template lang="pug">
div.category__list 
  CategoryListItem(v-for="categoryItem in _getCategoryList" :key="categoryItem.id" :categoryItem="categoryItem")
</template>
<script setup>
import CategoryListItem from "./CategoryListItem.vue";
import { inject, onMounted, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const _getCategoryList = computed(() => {
  return store.getters._getCategoryList;
});
// const categoryList = inject("CategoryListData");
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
