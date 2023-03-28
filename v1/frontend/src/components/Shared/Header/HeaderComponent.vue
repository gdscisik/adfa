<script setup>
import NavigationList from "./NavigationList.vue";
import HelpAnyoneButtonComponent from "../Buttons/HelpAnyoneButtonComponent.vue";
</script>
<template lang="pug">
header
  div.container.grid
    nav.nav 
      div.navigation__logo 
        RouterLink(:to="{name: 'Main'}")  
          img(src="@/assets/images/icons/adfa-logo-yatay.svg")
      NavigationList
      div.navigation__right
        RouterLink(:to="{name: 'Login'}") #[i.fas.fa-user]
        HelpAnyoneButtonComponent
</template>
<style lang="scss">
header {
  background-color: var(--color-header-background);
}
nav.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
}
.navigation__right {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4.8rem;
  & > a > i {
    font-size: 2.2rem;
    // color: var(--color-primary-green);
    color: var(--color-header-background);
    border-radius: 50%;
    background-color: var(--color-primary-green);
    padding: 1.2rem;
  }
}
</style>
