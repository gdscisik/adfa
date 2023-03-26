<template lang="pug">
h1 Categories Page
pre {{ categoryList() }}
</template>
<script setup>
import { useStore } from "vuex";

const store = useStore();

const categoryList = () => {
  return store.getters._getCategories;
};
</script>
