<template lang="pug">
div.container.container--full.copyright
  p Copyright © 2023. All Rights Represented by #[span adfa].
</template>
<style lang="scss">
.copyright {
  background-color: var(--color-primary-green);
  padding: 3.2rem 1.8rem;
  font-size: 2.4rem;
  font-weight: 600;
  color: var(--color-header-background);
  text-align: center;
  & span {
    color: var(--color-white);
  }
}
</style>
