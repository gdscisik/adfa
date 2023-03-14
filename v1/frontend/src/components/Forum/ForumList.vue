<template lang="pug">
div.container
  ul.forum__list
    ForumListItem(v-for="data in forumData" :key="data.id" :item="data")
</template>
<script setup>
import ForumListItem from "./ForumListItem.vue";
import { inject } from "vue";

const forumData = inject("RequestList");
</script>
<style lang="scss">
.forum__list {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-bottom: 3.6rem;
}
</style>
