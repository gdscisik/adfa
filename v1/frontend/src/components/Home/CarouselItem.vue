<template lang="pug">
.carousel__item.carousel__item--active(v-if="props.itemData.isActive" )  
  RouterLink(to="/donate") 
    img(:src="props.itemData.source")
  //button(@click="props.itemData.isActive = !props.itemData.isActive") activate
//h3(v-else) {{ props.itemData.isActive }}
</template>
<script setup>
// :class="{active : props.itemData.isActive}"
import { ref } from "vue";

const props = defineProps({
  itemData: {
    type: Object,
    required: true,
    default: {},
  },
});
//const isActive = ref(false);
</script>
<style lang="scss">
.carousel__item {
  position: relative;
  width: 100%;
  // height: 90vh;
  height: 70vh;
  overflow: hidden;
}
.carousel__item img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
  border-radius: 1.2rem;
}
.carousel__item--active img {
  width: 100%;
  object-fit: cover;
  object-position: center;
  filter: opacity(0.85);
  // background-blend-mode: darken;
}
</style>
