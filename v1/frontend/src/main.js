import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { appAxios } from "./utils/appAxios";
import store from "./store";
//import io from "socket.io-client";
//const socket = io("http://localhost:2000");

const app = createApp(App);
app.config.globalProperties.$appAxios = appAxios;
//app.config.globalProperties.$socket = socket;
app.use(store);
app.use(router);
app.mount("#app");

