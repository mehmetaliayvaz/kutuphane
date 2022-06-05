import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      user: {},
      books: [],
    }
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload;
    },
    setBooks (state, payload) {
      state.books = payload;
    }
  },
  getters: {
    getUser(state){
      return state.user;
    },
    getEmail(state){
      return state.user.user.email;
    },
    getBooks(state){
      return state.books;
    }
  }
})


export default store;