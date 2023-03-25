<template lang="pug">
div.container.forum-header
  h1.forum-header__title Forum 
  OpenNewRequestButton
</template>
<script setup>
import OpenNewRequestButton from "@/components/Shared/Buttons/OpenNewRequestButton.vue";
</script>
<style lang="scss">
.forum-header {
  margin-top: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__title {
    font-size: 4.8rem;
  }
}
</style>
