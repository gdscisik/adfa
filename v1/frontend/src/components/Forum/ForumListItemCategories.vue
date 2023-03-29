<template lang="pug">
li.forum__list-item-category(:style="{'background-color': `${color.backgroundCategoryColor}`}") {{ props.category }}
//- pre {{  }}
//- pre.forum__list-item-category {{ props.colorObject }} findCategoryColor(category)[0]
</template>
<script setup>
import { inject, onMounted } from "vue";

const findCategoryColor = inject("CategoryColorFinder");
const color = findCategoryColor(props.category);
const props = defineProps({
  category: {
    type: String,
  },
});
onMounted(() => {
  console.log("color :>> ", color[0]);
});
</script>
