<template lang="pug">
div.what-we-are 
  h2.what-we-are__title What is #[span A]ny #[span D]onate #[span F]or #[span A]nyone ? 
  p.what-we-are__description We are #[span adfa], a website dedicated to helping people. Our mission is to provide the information, resources, and support necessary to improve people's lives. We know that many people face challenges in their lives and need help to overcome them. That's why, at #[span adfa], we provide guidance and information on a range of topics to make people's lives easier. 
  p.what-we-are__description Our website covers topics such as health, finance, education, job search, relationships, and personal development. Additionally, as #[span adfa], we strive to offer various resources and tools to help people. Our goal is to provide people with the highest quality information and resources to help them improve their lives.
  p.what-we-are__description Thank you for using our site, and please don't hesitate to contact us if we can be of assistance on any topic.
</template>
<script setup></script>
<style lang="scss">
.what-we-are {
  //background-color: var(--color-main-background);
  padding: 3.6rem 2.4rem;
  &__title {
    font-size: 3.6rem;
    font-weight: 400;
    font-style: italic;
    text-align: center;
    margin-bottom: 2.4rem;
    & span {
      color: var(--color-primary-green);
      font-weight: 800;
    }
  }
  &__description {
    font-size: 1.6rem;
    text-align: center;
    font-style: italic;
    & span {
      color: var(--color-primary-green);
      font-weight: 800;
    }
  }
}
</style>
