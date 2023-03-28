<template lang="pug">
//- RouterLink(:to="{name: DonateRequest}") 
//- pre {{ props.item }}
//- pre {{ props.item }}
//- RouterLink(:to='`/requests/${props.item.id}`') 
RouterLink(:to="{name: 'RequestDetail', params: {id: `${props.item.id}`}}") 
  li.forum__list-item(:style="{'background-color': `${props.item.categoryColor}4D`}")
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
          li.forum__list-item-category(v-for="category in props.item.categoryList" :key="category" :style="{'background-color': `${props.item.category_color}4D`}") {{ category }}
        //- DonateButtonComponent
</template>
<script setup>
import { inject, onMounted } from "vue";
// import DonateButtonComponent from "@/components/Shared/Buttons/DonateButtonComponent.vue";
const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: {},
  },
});
/* const appAxios = inject("AppAxios");
onMounted(() => {
  appAxios.get(`/requests/${toString(props.item.id)}`).then((response) => {
    console.log("response :>> ", response);
  });
}); */
</script>
<style lang="scss">
.forum__list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.4rem;
  padding: 1.8rem 2.4rem;
  border-radius: 1rem;
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
