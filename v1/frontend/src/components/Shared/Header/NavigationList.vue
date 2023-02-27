<script setup>
import { ref } from "vue";
import NavigationListItem from "../Header/NavigationListItem.vue";
const destinations = ref([
  { title: "Home", id: 1 },
  { title: "About Us", id: 2 },
  { title: "Media Center", id: 3 },
  { title: "Plans & Reports", id: 4 },
  { title: "Donate", id: 5 },
]);
</script>

<template lang="pug">
ul.navigation__list 
  NavigationListItem(v-for="item in destinations", :key="item.id", :destination="item.title")
</template>
<style lang="scss">
.navigation__list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.6rem;
  text-transform: uppercase;
  font-size: 1.6rem;
  color: var(--color-primary-green);
  font-weight: 700;
}
</style>
