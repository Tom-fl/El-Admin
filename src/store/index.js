/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2021-09-22 18:34:07
 * @LastEditTime: 2021-09-22 22:42:19
 * @Email: str-liang@outlook.com
 * @FilePath: \demo\src\store\index.js
 * @Environment: Win 10 Python 3.8
 * @Description:
 */
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

let modules = {};
const files = require.context("./modules", false, /\.js$/);
files.keys().forEach(key => {
  modules[key.replace(/(\.\/|\.js)/g, "")] = files(key).default;
});

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    changeLoading(state, payload) {
      state.loading = payload;
    }
  },
  modules,
  plugins: [
    // createPersistedState({
    //   key: "vueData",
    //   reducer: val => {
    //     return {
    //       user: val.user
    //     };
    //   }
    // })
  ]
});
