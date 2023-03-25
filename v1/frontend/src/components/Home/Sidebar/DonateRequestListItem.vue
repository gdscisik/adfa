<template lang="pug">
RouterLink(:to='`/requests/${props.requestItem.id}`') 
  li.donate-request__list-item(:style="{'background-color': `${props.requestItem.category_color}4D`}")
    div.donate-request__list-item__image
      img(:src="props.requestItem.user_image" :style="{'border': `3px solid ${props.requestItem.category_color}`}")
    div.donate-request__list-item__content
      h4 {{ props.requestItem.title }}
      p {{ props.requestItem.description }}
</template>
<style lang="scss">
.donate-request__list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
  padding: 1.6rem;
  margin: 1rem 0;
  border-radius: 1rem;
  &:nth-child(even) {
    flex-direction: row-reverse;
  }
  &__image {
    width: 6.7rem;
    height: 6.7rem;
    & img {
      width: 100%;
      height: 100%;
      border-radius: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  &__content {
    padding-right: 3.2rem;
    & h4 {
      font-size: 1.6rem;
    }
    & p {
      font-size: 1.4rem;
    }
    &:nth-child(even) {
      gap: 1.8rem;
      padding-right: 0;
    }
  }
}
</style>
<script setup>
import { ref } from "vue";
const props = defineProps({
  requestItem: {
    type: Object,
    required: true,
    default: {},
  },
});
const data = ref([
  "#1D81B9",
  "#B91D1D",
  "#B3CC17",
  "#0D921B",
  "#6A1CA6",
  "#0F4632",
  "#A8690B",
]);
</script>
