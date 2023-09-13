export default {
    namespaced: true,
    state: {
      isAuthenticated : false,
      authUser : null    
    },
    mutations: {
      SET_AUTH_USER(state, data){
        state.authUser = data
      },
      SET_IS_AUTHENTICATED(state, data){
        state.isAuthenticated = data
      }
    },
  };
  