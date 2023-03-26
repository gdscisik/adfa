<template lang="pug">
//- RouterLink(to=`/campaigns/${props.campaignItem.campaignId}`).button.button--category-donate Donate 
button.button.button--donate 
  RouterLink(:to='`/campaigns/${props.campaignItemId}`') Donate 
</template>
<style lang="scss">
button.button--donate {
  background-color: var(--color-primary-green);
  color: var(--color-white);
  // width: 85%;
  margin-inline: auto;
  padding: 1.2rem 2.4rem;
  margin-top: 2.4rem;
  display: inline-block;
  & > a {
    justify-content: center;
  }
}
</style>
<script setup>
const props = defineProps({
  campaignItemId: {
    type: String,
    required: true,
  },
});
</script>
