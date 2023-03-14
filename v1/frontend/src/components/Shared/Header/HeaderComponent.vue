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
</style>
