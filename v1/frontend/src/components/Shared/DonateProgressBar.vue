<template lang="pug">
div.progress-bar
  span.progress-bar--target
  span.progress-bar--current 
</template>
<style lang="scss">
.progress-bar {
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 1rem;
  border: 0.3rem solid var(--color-primary-green);
  &--target {
    width: 100%;
    border: 1rem solid var(--color-primary-green);
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }
  &--current {
    width: 25%;
    // border: 1rem solid blue;
  }
}
</style>
