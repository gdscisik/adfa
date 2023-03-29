<template lang="pug">
//- pre {{ props.requestItem }}
//- pre {{ findCategoryColor().categoryColor }}
RouterLink(:to='`/requests/${props.requestItem.id}`') 
  li.donate-request__list-item(:style="{'background-color': `${colorObject[0].backgroundCategoryColor}`}")
    div.donate-request__list-item__image
      img(:src="props.requestItem.imageSource" :style="{'border': `3px solid ${colorObject[0].categoryColor}`}")
    div.donate-request__list-item__content
      h4 {{ props.requestItem.title }}
      p {{  props.requestItem.description.substring(0, 45) }}...
</template>
<style lang="scss">
.donate-request__list-item {
  display: flex;
  align-items: center;
  // justify-content: space-between;
  justify-content: flex-start;
  gap: 1.6rem;
  padding: 1.6rem;
  margin: 1rem 0;
  border-radius: 1rem;
  &:nth-child(even) {
    flex-direction: row-reverse;
  }
  &__image {
    // display: flex;
    // align-items: flex-start;
    // justify-content: center;
    & img {
      width: 6.7rem;
      height: 6.7rem;
      // width: 100%;
      // height: 100%;
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
import { ref, inject, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();

// const _getCategoryList = () => {
//   return store.getters._getCategoryList;
// };
// const findCategoryColor = () => {
//   const object = _getCategoryList().filter(
//     (category) => category.name == props.requestItem.categoryList[1],
//   );
//   // console.log("color :>> ", color);
//   return object;
// };
const findCategoryColor = inject("CategoryColorFinder");
const colorObject = findCategoryColor(props.requestItem.categoryList[1]);
onMounted(() => {
  console.log("colorObject :>> ", colorObject);
});

// const categoryData = store.getters.categories;
// const getCategoryColor = categoryData.filter(i => i.categoryList[0]);
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
