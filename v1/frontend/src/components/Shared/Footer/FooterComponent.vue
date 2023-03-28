<template lang="pug">
footer.footer 
  div.container.flex
    FooterLogoComponent
    ul.footer__list.footer__list--contact
      h3 CONTACT
      li.footer__list-item
        img.footer__list-image(src="@/assets/images/icons/email-icon.svg")
        a.footer__list-link(href="mailto:adfahelp@gmail.com") adfahelp@gmail.com
      li.footer__list-item
        img.footer__list-image(src="@/assets/images/icons/phone-icon.svg")
        a.footer__list-link(href="tel:+905556667788") +90 555 666 77 88
      li.footer__list-item
        img.footer__list-image(src="@/assets/images/icons/location-icon.svg")
        a.footer__list-link(href="#") Lorem ipsum dolor sit amet. #[br] Lorem ipsum dolor sit amet
    ul.footer__list.footer__list--sitemap
      h3 SITEMAP
      li.footer__list-item(v-for="item in sitemapData" :key="item")
        RouterLink.footer__list-link(:to="`/${KebabCaseGenerator(item)}`") {{ item }}
    FooterLogoComponent
CopyrightComponent
</template>
<script setup>
import { inject, ref } from "vue";
import CopyrightComponent from "./CopyrightComponent.vue";
import FooterLogoComponent from "./FooterLogoComponent.vue";
const KebabCaseGenerator = inject("KebabCaseGenerator");
const sitemapData = ref([
  "About Us",
  "Media Center",
  "Plans & Reports",
  "Donate",
  "Requests",
]);
</script>
<style lang="scss">
.footer {
  background-color: var(--color-header-background);
  padding: 3.6rem 1.2rem;
  // align-items: flex-start;
  // & div > :nth-child(3) {
  //   align-self: flex-end;
  // }
  &__list {
    padding: 3.6rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    & h3 {
      font-size: 1.8rem;
    }
    &-title {
      font-size: 1.8rem;
      text-transform: uppercase;
      font-weight: 700;
    }
    &-item {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1.6rem;
    }
    &-image {
      width: 4.8rem;
      padding: 1rem;
      border-radius: 50%;
      background-color: var(--color-primary-green);
    }
    &-link {
      font-size: 1.4rem;
    }
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
