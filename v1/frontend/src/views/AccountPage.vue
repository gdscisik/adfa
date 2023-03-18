<template lang="pug">
div 
  h1 Account Page
  //- p {{ getCurrentUser }}
  p {{ getUserData() }}
</template>
<script setup>
// import { useStore, mapGetters } from "vuex";
import { appAxios } from "../utils/appAxios";
// const store = useStore();
//const getCurrentUser = store.getters("_getCurrentUser");
/* mapGetters({
  getCurrentUser: store.getters._getCurrentUser,
}); */
const getUserData = () => {
  const user = appAxios.get("/users").then((response) => {
    console.log("response :>> ", response);
    // store.commit._setUser(response.data[0]);
  });
  return user;
};
</script>
