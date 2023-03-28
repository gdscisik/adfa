<template lang="pug">
button.button.button--create-account(@click="$router.push('/home')") Login 
</template>
<style lang="scss">
button.button.button--create-account {
  background-color: var(--color-primary-green);
  display: block;
  color: var(--color-header-background);
  padding: 1rem;
  margin-inline: auto;
}
</style>
