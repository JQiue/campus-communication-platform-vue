import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userinfo: {
      nickname: localStorage.getItem("nickname"),
      isAdmin: false,
    },
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
