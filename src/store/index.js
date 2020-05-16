import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/authentification/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},

  modules: {
    auth
  }
});
