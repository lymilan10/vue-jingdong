import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// vuex中store存储的数据会随着页面的刷新而清空
let store = new Vuex.Store({
  state: {
    token: '',
    cartArr: JSON.parse(localStorage.getItem('cartArr'))||[],//存储商品
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    //添加商品到购物车
    toCart(state, tag) {
      let goods = state.cartArr.find(v =>
        v.title == tag.label
      )
      if (goods) {
        goods.cartCount += 1;
      } else {
        state.cartArr.push({ title: tag.label, cartCount: 1 })
      }
    },
    addCart(state, index) {
      state.cartArr[index].cartCount++
    },
    removeCart(state, index) {
      if (state.cartArr[index].cartCount > 1) {
        state.cartArr[index].cartCount--
      } else {
        if (window.confirm('确定从购物车移除商品?')) {
          state.cartArr.splice(index, 1)
        }
      }

    },
    clearCart(state) {
      state.cartArr = []
    }
  },
  actions: {
  },
  //相当于vue的计算属性
  getters: {
    countSum1: state => {
      let num = 0
      state.cartArr.forEach(v => {
        num += v.cartCount
      })
      return num
    }

  },
  modules: {
  }
})

//监听mutation事件
store.subscribe((mutations,state)=>{
  localStorage.setItem('cartArr',JSON.stringify(state.cartArr))
})
export default store
