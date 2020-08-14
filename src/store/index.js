import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// vuex中store存储的数据会随着页面的刷新而清空
export default new Vuex.Store({
  state: {
    token:'',
    cartArr:[],//存储商品
  },
  mutations: {
    setToken(state,token){
      state.token = token;
    },
    //添加商品到购物车
    toCart(state,tag){
      let goods=state.cartArr.find(v=>
        v.title == tag.label
      )
      if(goods){
        goods.cartCount+=1;
      }else{
        state.cartArr.push({title:tag.label,cartCount:1})
      }
    },
    addCart(state,index){
      state.cartArr[index].cartCount++
    },
    removeCart(state,index){
      state.cartArr[index].cartCount--
    },
    clearCart(state){
      state.cartCount=0
    }

  },
  actions: {
  },
  //相当于vue的计算属性
  getters: {
    countSum1:state=>{
      let num = 0
      state.cartArr.forEach(v=>{
       num+=v.cartCount
      })
      return num
    }

  },
  modules: {
  }
})
