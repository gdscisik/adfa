<template lang="pug">
li.navigation__list__item
  a.navigation__list__item__link {{ props.destination }} 
</template>
<script setup>
const props = defineProps({
  destination: {
    type: String,
    required: true,
  },
});
</script>
<style lang="scss">

</style>
