/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2021-09-22 11:58:03
 * @LastEditTime: 2021-09-22 21:21:50
 * @Email: str-liang@outlook.com
 * @FilePath: \demo\src\main.js
 * @Environment: Win 10 Python 3.8
 * @Description:
 */
import Vue from "vue";
import App from "./App.vue";
import ElementUI from "@/plugins/elementUI";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
