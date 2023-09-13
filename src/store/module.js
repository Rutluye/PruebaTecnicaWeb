export default {
  namespaced: true,
  state: {
    tokenAuth: false,
    username: "",
    person: "",
    optionsMenu: [],
    dataHeader: [],
  },
  mutations: {
    setAuthToken(state, val) {
      state.tokenAuth = val.status;
      state.username = val.username;
      state.person = val.person;
    },
    setHeadNv(state, val) {
      state.dataHeader = val;
    },
    SET_OPTIONS_MENU(state, val) {
      state.optionsMenu = val;
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.tokenAuth;
    },
    isHeadNv(state) {
      return state.data;
    },
    options(state) {
      return state.options;
    },
  },
};
