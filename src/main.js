import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'amfe-flexible'
import setAxios from './setaxios'

setAxios()

Vue.config.productionTip = false

Vue.prototype.$http = axios

// 路由守卫
router.beforeEach((to, from, next) => {
  store.commit('setToken', localStorage.getItem('token'))
  if (to.meta.requireAuth) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }//将该路由带到/login页面
      })
    }
  }else{
    next()
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
