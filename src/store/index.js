import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// vuex中store存储的数据会随着页面的刷新而清空
export default new Vuex.Store({
  state: {
    token:''
  },
  mutations: {
    setToken(state,token){
      state.token = token;
    }
  },
  actions: {
  },
  getters: {

  },
  modules: {
  }
})
