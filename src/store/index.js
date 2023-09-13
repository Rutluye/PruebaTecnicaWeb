import Vuex from "vuex";
import authStore from "./authStore";

const store = new Vuex.Store({
  modules: {
    authStore,
  }
});

export default store;
