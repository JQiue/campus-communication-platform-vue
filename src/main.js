import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
// import { io } from "socket.io-client";

// const socket = io("http://localhost:3000", {
//   withCredentials: true,
// });

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

// Vue.prototype.$socket = socket;
Vue.prototype.$http = axios;
Vue.prototype.$message = ElementUI.Message;

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
