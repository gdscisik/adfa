<template lang="pug">
HeaderComponent
div.container.container--full.grid.grid--1-1.login-container
  div.login__image
  div.login__content
    form.login-form(method="post", action="")
      div.input__group
        label(for="email") E-mail
        input(type="email" name="email" id="email" placeholder="E-mail")
      div.input__group
        label(for="password") Password
        input(type="password" name="password" id="password" placeholder="*******")
      LoginButtonComponent
    p.login__content-register  Don't you have an account? 
      span #[RouterLink(:to="{name: 'Register'}") Register]
div.login__main-title Sign in
CopyrightComponent
</template>
<style lang="scss">
.login {
  &-container {
    height: 81vh;
    position: relative;
  }
  &-form {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    gap: 2.4rem;
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin-inline: auto;
    // height: inherit;
    padding: {
      top: 4.8rem;
      bottom: 4.8rem;
    }
    &-register {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 2.4rem;
      font-size: 1.6rem;
      gap: 2.4rem;
      & > span {
        color: var(--color-primary-green);
        font-weight: 600;
      }
    }
  }
  &__image {
    background-image: linear-gradient(to right bottom, #586a314d, #586a314d),
      url("@/assets/images/login-image.jpg");
    background-position: left;
    background-size: cover;
  }
  &__main-title {
    position: absolute;
    font-size: 19.2rem;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    color: var(--color-primary-green);
    top: 37%;
    left: 30%;
    // transform: translate(-50%, -50%);
    transform: rotate(-90deg);
    user-select: none;
  }
}
.input__group {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  font-size: 1.6rem;
  & > input {
    font-size: 1.6rem;
    width: 100%;
    border: none;
    background: none;
    outline: none;
    border-bottom: 2px solid var(--color-primary-green);
    margin-top: 1.2rem;
    &::placeholder {
      color: #adacac;
    }
  }
  &:nth-child(1) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
  &:nth-child(2) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }
  &:nth-child(3) {
    grid-column: 1 / -1;
    grid-row: 4 / 5;

    display: grid;
    grid-template-columns: 1fr 1fr;
    & > button:nth-child(1) {
      grid-column: 1 / 2;
    }
    & > button:nth-child(2) {
      grid-column: 2 / 3;
    }
  }
}
</style>
<script setup>
import HeaderComponent from "@/components/Shared/Header/HeaderComponent.vue";
import CopyrightComponent from "@/components/Shared/Footer/CopyrightComponent.vue";
import LoginButtonComponent from "@/components/Shared/Buttons/LoginButtonComponent.vue";
</script>
