<template lang="pug">
RouterLink(:to="`/${KebabCaseGenerator(props.destination)}`")
  li.navigation__list__item
    a.navigation__list__item__link {{ props.destination }} 
</template>
<script setup>
import { inject } from 'vue';

const props = defineProps({
  destination: {
    type: String,
    required: true,
  },
});

const KebabCaseGenerator = inject("KebabCaseGenerator");
</script>
<style lang="scss"></style>
