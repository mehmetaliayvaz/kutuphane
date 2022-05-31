import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      user: {},
    }
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload;
    }
  },
  getters: {
    getUser(state){
      return state.user;
    },
    getEmail(state){
      return state.user.user.email;
    }
  }
})


export default store;