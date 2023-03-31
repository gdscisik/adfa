<template lang="pug">
//- RouterLink(:to="{name: DonateRequest}") 
//- pre {{ props.item }}
//- RouterLink(:to='`/requests/${props.item.id}`') 
RouterLink(:to="{name: 'RequestDetail', params: {id: `${props.item.id}`}}") 
  //- li.forum__list-item()
  li.forum__list-item(:style="{'background-color': `${colorObject[0].backgroundCategoryColor}`}")
    div.forum__list-item-image
      img(:src="props.item.imageSource")
    div.forum__list-item-content
      div.forum__list-item-content-header 
        h3.forum__list-item-title {{ props.item.title }}
        //- span.forum__list-item-date {{ props.item.title }}
        //- span.forum__list-item-date {{ props.item.createdDate }}
      p.forum__list-item-description {{ props.item.description }}
      //- span.forum__list-item-date {{ props.item.createdDate }}
      div.forum__List-item-content-footer 
        ul.forum__list-item-categories
          ForumListItemCategories(v-for="category in props.item.categoryList" :key="category" :category="category")
          //- li.forum__list-item-category(v-for="(category, index) in props.item.categoryList" :key="category") {{ category }}
            //- pre {{ findCategoryColor(category)[0].backgroundCategoryColor }}
          //- li.forum__list-item-category(v-for="(category, index) in props.item.categoryList" :key="category" :style="{'background-color': `${findCategoryColor(props.item.categoryList[index])[0].backgroundCategoryColor}`}") {{ category }}
      //- pre {{ colorObject[0].backgroundCategoryColor }}
</template>
<script setup>
import ForumListItemCategories from "./ForumListItemCategories.vue";
import { inject } from "vue";

const findCategoryColor = inject("CategoryColorFinder")
const colorObject = findCategoryColor(props.item.categoryList[0]);
const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: {},
  },
});
</script>
<style lang="scss">
.forum__list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.4rem;
  padding: 1.8rem 2.4rem;
  border-radius: 1rem;
  // width: 100%;
  &-image {
    // width: 20%;
    // height: auto;
    // overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & img {
      // margin-inline: auto;
      border-radius: 1.4rem;
      // width: 100%;
      width: 12.8rem;
      object-fit: cover;
      object-position: center;
    }
  }
  &-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    gap: 1.2rem;
    &-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
    }
  }
  &-title {
    font-size: 1.6rem;
  }
  &-date {
    font-size: 1.6rem;
  }
  &-description {
    font-size: 1.4rem;
  }
  &-categories {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.6rem;
  }
  &-category {
    font-size: 1.4rem;
    padding: 0.5rem 1rem;
    border-radius: 100px;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
}
</style>
