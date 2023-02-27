<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: {},
  },
});
</script>
<style lang="scss">
.footer__list-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.6rem;
  & img {
    width: 4.8rem;
    padding: 1rem;
    border-radius: 50%;
    background-color: var(--color-primary-green);
  }
  & span {
    font-size: 1.6rem;
    &.width-75 {
      width: 50%;
    }
  }
}
</style>
<template lang="pug">
li(v-if="(typeof props.item) == typeof({})").footer__list-item 
  img(:src="props.item.icon")
  //span.width-75 #[a(:href="props.item.text")]
  span.width-75 {{ props.item.text }}
li(v-else).footer__list-item 
  span {{ props.item }}
</template>
