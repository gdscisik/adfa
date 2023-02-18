<template lang="pug">
div.card 
  div.card__side.card__side--front(:style="{'background-image': `url(${props.categoryItem.image_source})`, 'border': `0.4rem solid ${props.categoryItem.category_color}`}")
  div.card__side.card__side--back(:style="{'background-color': `${props.categoryItem.category_color}4D`, 'border': `0.4rem solid ${props.categoryItem.category_color}`}")
    div
      h3.card__side__title For {{ props.categoryItem.name }}
      p.card__side__description {{ props.categoryItem.description }}
      DonateButtonComponent(:buttonColor="props.categoryItem.category_color")
</template>
<script setup>
import DonateButtonComponent from "../Shared/DonateButtonComponent.vue";
const props = defineProps({
  categoryItem: {
    type: Object,
    required: true,
    default: {},
  },
});
// const categoryItemLayerClass = reactive({
//   'category-style':
// })
</script>
<style lang="scss">
.card {
  position: relative;
  width: auto;
  &__side {
    transition: all 0.8s ease;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    height: 27rem;
    cursor: pointer;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    position: relative;
    &--front {
      position: absolute;
      top: 0;
      left: 0;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 50%;
      width: 100%;
      &:hover {
        transform: rotateY(-180deg);
      }
    }
    &--back {
      transform: rotateY(180deg);
      &:hover {
        transform: rotateY(0);
      }
      & > div {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;

        max-width: 50%;
        margin: 0;
        padding: 0;
        & h3 {
          font-size: 1.6rem;
          text-align: center;
        }
        & p {
          text-align: center;
          width: 100%;
        }
      }
    }
  }
  &:hover &__side--front {
    transform: rotateY(-180deg);
  }
  &:hover &__side--back {
    transform: rotateY(0);
  }
}
</style>
