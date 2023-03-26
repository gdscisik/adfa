<template lang="pug">
HeaderComponent
div.container.container--full.grid.grid--1-1.register-container
  div.register__image
  div.register__content
    form.register-form.grid.grid--1-1
      div.input__group
        label(for="firstNameField") First Name
        input(type="text" id="firstNameField" placeholder="First Name ")
      div.input__group
        label(for="lastNameField") Last Name
        input(type="text" id="lastNameField" placeholder="Last Name")
      div.input__group
        label(for="emailField") E-mail
        input(type="email" id="emailField" placeholder="E-mail")
      div.input__group
        label(for="passwordField") Password
        input(type="password" id="passwordField" placeholder="*******")
      div.input__group
        ChangeMethodButtonComponent
        CreateAccountButtonComponent
    p.register__content-login  Already A Member? 
      span #[RouterLink(:to="{name: 'Login'}") Log in]
div.register__main-title Sign Up
CopyrightComponent
</template>
<style lang="scss">
.register {
  &-container {
    height: 81vh;
    position: relative;
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
    &-login {
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
      url("@/assets/images/register-image.jpg");
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
    left: 28.75%;
    // transform: translate(-50%, -50%);
    transform: rotate(-90deg);
    user-select: none;
  }
}
.input__group {
  display: flex;
  align-items: flex-start;
  justify-content: center;
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
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
  &:nth-child(2) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
  &:nth-child(3) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }
  &:nth-child(4) {
    grid-column: 1 / 3;
    grid-row: 3 / 4;
  }
  &:nth-child(5) {
    grid-column: 1 / 3;
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
import CreateAccountButtonComponent from "@/components/Shared/Buttons/CreateAccountButtonComponent.vue";
import ChangeMethodButtonComponent from "@/components/Shared/Buttons/ChangeMethodButtonComponent.vue";
</script>
