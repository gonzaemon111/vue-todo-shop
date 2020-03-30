import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'Hello Vue',
    users: [
      { name: `hoge1`, email: `hoge1@hoge.com`, age: 20 },
      { name: `hoge2`, email: `hoge2@hoge.com`, age: 25 },
      { name: `hoge3`, email: `hoge3@hoge.com`, age: 30 },
    ],
    count: 0
  },
  getters: {
    users(state) {
      return state.users.filter(user => user.age < 30);
    }
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state, number) {
      state.count = state.count - number;
    },
  },
  actions: {
  },
  modules: {
  }
})
