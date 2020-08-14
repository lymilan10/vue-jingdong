import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'register',
    redirect: '/login'//重定向
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    
    component: () => import('../views/Login.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/botnav',
    name: 'botnav',
    component: () => import('../views/BottomNav.vue'),
    children:[
      {
        path: 'index',
        name: 'index',
        component: () => import('../views/Index.vue')
      },
      {
        path: 'list',
        name: 'list',
        component: () => import('../views/List.vue')
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('../views/Search.vue')
      },
      {
        path: 'cart',
        name: 'cart',
        meta: { 
          requireAuth:true //需要浏览权限
         },
        component: () => import('../views/Cart.vue')
      },
      {
        path: 'mine',
        name: 'mine',
        meta: { 
          requireAuth:true //需要浏览权限
         },
        component: () => import('../views/Mine.vue')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
