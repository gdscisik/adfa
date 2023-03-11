<template lang="pug">
button.button.button--open-new-request 
  RouterLink(:to="{name: Forum}") Open New Request
</template>
<style lang="scss">
button.button.button--open-new-request {
  background-color: var(--color-primary-green);
  color: var(--color-main-background);
  padding: 1.1rem 2.4rem;
}
</style>
