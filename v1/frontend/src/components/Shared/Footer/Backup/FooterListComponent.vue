<template lang="pug">
ul.footer__contact.footer__list
  h3.footer__list-title {{ props.title }}
  FooterListItemComponent(v-for="item in props.list" :item="item")
</template>
<script setup>
import FooterListItemComponent from "./FooterListItemComponent.vue";
const props = defineProps({
  list: {
    type: Array,
    required: true,
    default: [],
  },
  title: {
    type: String,
    required: true,
    default: "Footer Title",
  },
});
</script>
<style lang="scss">
.footer__list {
  padding: 3.6rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  &-title {
    font-size: 1.8rem;
    text-transform: uppercase;
    font-weight: 700;
  }
}
</style>
