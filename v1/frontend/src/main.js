import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { appAxios } from "./utils/appAxios";
import store from "./store";
//import io from "socket.io-client";
//const socket = io("http://localhost:2000");

const app = createApp(App);
// app.config.globalProperties.$axios = appAxios;
//app.config.globalProperties.$socket = socket;
app.provide("AppAxios", appAxios);
app.use(store);
app.use(router);
app.mount("#app");
