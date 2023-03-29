<template lang="pug">
HeaderComponent
div.container.container--quarter.container--request
  h1 Create New Donate Request 
  div.request-input-group
    label(for="requestTitle") Title
    input(type="text", id="requestTitle", v-model="requestTitle") 
  div.request-input-group
    label(for="requestDescription") Description
    input(type="text", id="requestDescription", v-model="requestDescription")
  div.request-input-group
    label(for="requestImage") Image URL
    input(type="text", id="requestImage", v-model="requestImage")
  div.request-input-group.request-input-group--category
    div
      input(type="checkbox", v-model="categoryList", value="Education", id="categoryList--Education")
      label(for="categoryList--Education") Education
    div
      input(type="checkbox", v-model="categoryList", value="Food", id="categoryList--Food")
      label(for="categoryList--Food") Food
    div
      input(type="checkbox", v-model="categoryList", value="Personal Needs", id="categoryList--Personal-Needs")
      label(for="categoryList--Personal-Needs") Personal Needs
    div
      input(type="checkbox", v-model="categoryList", value="Natural Disaster", id="categoryList--Natural-Disaster")
      label(for="categoryList--Natural-Disaster") Natural Disaster
    div
      input(type="checkbox", v-model="categoryList", value="Scholarship", id="categoryList--Scholarship")
      label(for="categoryList--Scholarship") Scholarship
    div
      input(type="checkbox", v-model="categoryList", value="Institutions", id="categoryList--Institutions")
      label(for="categoryList--Institutions") Institutions 
    div
      input(type="checkbox", v-model="categoryList", value="Clothes", id="categoryList--Clothes")
      label(for="categoryList--Clothes") Clothes
  div.request-input-group.request-input-group--buttons
    button.button.button--go-previous-page(@click="$router.push('/requests')") Go Back
    button.button.button--open-new-request(@click="createDonateRequest") Create New Request
</template>
<style lang="scss">
button.button {
  &--go-previous-page {
    background-color: var(--color-header-background);
    color: var(--color-primary-green);
  }
}
.container--request {
  padding: 4.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 2.4rem;
}
.request-input-group {
  font-size: 1.4rem;
  display: flex;
  // align-items: center;
  justify-content: space-between;
  flex-direction: column;
  // gap: 1rem;
  & > input {
    outline: none;
    background: inherit;
    border: none;
    border-bottom: 3px solid var(--color-primary-green);
    padding: {
      bottom: 1.2rem;
      left: 1.2rem;
      top: 1rem;
      right: 1.2rem;
    }
    font: inherit;
    font-size: inherit;
  }
  & > label {
    font-size: 1.6rem;
  }
  & div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.8rem;
    // flex-direction: column;
    & > input {
      // width: 100%;
    }
    & > label {
      font-size: 1.6rem;
    }
  }
  &--category {
    flex-direction: column;
  }
  &--buttons {
    flex-direction: row;
    gap: 1.2rem;
  }
}
</style>
<script setup>
import HeaderComponent from "@/components/Shared/Header/HeaderComponent.vue";
import { ref, inject } from "vue";
import router from "../router";
// import { useStore } from "vuex";

const appAxios = inject("AppAxios");
const requestTitle = ref("");
const requestDescription = ref("");
const requestImage = ref("");
const categoryList = ref([]);

const data = ref({
  // donateRequestId,
  createdDate: new Date(),
  creatorId: "7fTSfEFHWNKERWB8fjdO",
  title: requestTitle,
  description: requestDescription,
  attachment: "",
  imageSource: requestImage,
  donatorId: "ZZMwygqmTYyN0FRyS7tk",
  isActive: true,
  categoryList: categoryList,
});
const createDonateRequest = () => {
  appAxios.post("/requests", data.value).then((response) => {
    console.log("response :>> ", response);
  });
  router.push("/requests");
  // console.log("data :>> ", data.value);
};
</script>
