<template lang="pug">
//div.container.container--full
div.container
  .carousel 
    button.button.button--go-back(@click="goBack()", :style="{'color': imagesArray[currentItemBeforeIndex].color}") &lt;
    CarouselItem(v-for="item in imagesArray", :key="item.id", :itemData="item")
    button.button.button--go-forward(@click="goForward()", :style="{'color': imagesArray[currentItemAfterIndex].color}") >
  pre(style="display: none;") {{ imagesArray }}
</template>
<script setup>
import { ref, reactive } from "vue";
import CarouselItem from "./CarouselItem.vue";
let index = 0;
const imagesArray = ref([
  {
    id: 0,
    source: "../../../src/assets/images/slider/slider-1.jpg",
    color: "#1D81B9",
    before: 6,
    after: 1,
    isActive: true,
  },
  {
    id: 1,
    source: "../../../src/assets/images/slider/slider-2.jpg",
    color: "#B91D1D",
    before: 0,
    after: 2,
    isActive: false,
  },
  {
    id: 2,
    source: "../../../src/assets/images/slider/slider-3.jpg",
    color: "#B3CC17",
    before: 1,
    after: 3,
    isActive: false,
  },
  {
    id: 3,
    source: "../../../src/assets/images/slider/slider-4.jpg",
    color: "#0D921B",
    before: 2,
    after: 4,
    isActive: false,
  },
  {
    id: 4,
    source: "../../../src/assets/images/slider/slider-5.jpg",
    color: "#6A1CA6",
    before: 3,
    after: 5,
    isActive: false,
  },
  {
    id: 5,
    source: "../../../src/assets/images/slider/slider-6.jpg",
    color: "#0F4632",
    before: 4,
    after: 6,
    isActive: false,
  },
  {
    id: 6,
    source: "../../../src/assets/images/slider/slider-7.jpg",
    color: "#A8690B",
    before: 5,
    after: 0,
    isActive: false,
  },
]);
const goForward = ref(() => {
  if (index == 6) {
    index = 0;
  } else {
    index++;
  }
  move(index, true, false);
});
const goBack = () => {
  if (index == 0) {
    index = 6;
  } else {
    index--;
  }
  move(index, true, false);
};
let currentItem = ref(imagesArray.value[index]);
let currentItemBeforeIndex = currentItem.value.before;
let currentItemAfterIndex = currentItem.value.after;
const move = (index, state1, state2) => {
  imagesArray.value.forEach((image, idx) => {
    image.id == index;
    if (idx == index) {
      imagesArray.value[idx].isActive = state1;
    } else {
      imagesArray.value[idx].isActive = state2;
    }
  });
  currentItem.value = imagesArray.value[index];
  currentItemBeforeIndex = currentItem.value.before;
  currentItemAfterIndex = currentItem.value.after;
};
</script>
<style lang="scss">
.carousel {
  margin-top: 2.4rem;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.button {
  &.button--go-back,
  &.button--go-forward {
    position: absolute;
    z-index: 3;
    font-size: 7.8rem;
    font-weight: 800;
    opacity: 0.5;
  }
  &.button--go-back {
    left: 0;
  }

  &.button--go-forward {
    right: 0;
  }
}
</style>
