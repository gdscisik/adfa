<template lang="pug">
footer.footer 
  div.container.flex
    div.footer__logo
      img(src="@/assets/images/icons/adfa-logo-dikey.svg")
    FooterListComponent(title="Contact" :list="contactData")
    FooterListComponent(title="Sitemap" :list="sitemapData")
    div.footer__logo
      img(src="@/assets/images/icons/adfa-logo-dikey.svg")
CopyrightComponent
</template>
<script setup>
import { ref } from "vue";
import FooterListComponent from "./FooterListComponent.vue";
import CopyrightComponent from "./CopyrightComponent.vue";
const contactData = ref([
  {
    icon: "src/assets/images/icons/email-icon.svg",
    text: "adfahelp@gmail.com",
  },
  {
    icon: "src/assets/images/icons/phone-icon.svg",
    text: "+90 555 666 77 88",
  },
  {
    icon: "src/assets/images/icons/location-icon.svg",
    text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
]);
const sitemapData = ref([
  "Home",
  "About Us",
  "Media Center",
  "Plans & Reports",
  "Donate",
]);
/*
const sitemapData = ref([
  {text: "Home", link: "#"},
  {text: "About Us", link: "#"},
  {text: "Media Center", link: "#"},
  {text: "Plans & Reports", link: "#"},
  {text: "Donate", link: "#"},
]);
*/
</script>
<style lang="scss">
.footer {
  background-color: var(--color-header-background);
  padding: 3.6rem 1.2rem;
  align-items: center;
  justify-self: center;
  & div > :nth-child(3) {
    align-self: flex-end;
  }
}
</style>
<style scoped>
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* flex-direction: row; */
}
</style>
