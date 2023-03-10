<template lang="pug">
button.button.button--see-more 
  RouterLink(to="/forum") See More
</template>
<style lang="scss">
button.button--see-more {
  text-align: center;
  margin: 2.4rem auto 0rem;
  padding: 1.4rem 4.8rem;
  background-color: var(--color-primary-green);
  // border: 0.3rem solid var(--color-primary-green);
  color: var(--color-main-background);
  // color: var(--color-primary-green);
  letter-spacing: 1px;
  font-size: 1.6rem;
  font-weight: 600;
}
</style>
