<template lang="pug">
button.button.button--category-donate(:style="{'background-color': props.buttonColor}") Donate 
</template>
<style lang="scss">
button.button--category-donate {
  color: var(--color-white);
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 1px;
  border: 2px solid var(--color-white);
  margin-top: 1.4rem;
  padding: 1.2rem 2.8rem;
  text-transform: uppercase;
}
</style>
<script setup>
const props = defineProps({
  buttonColor: {
    type: String,
    required: true,
    default: "transparent",
  },
});
</script>
