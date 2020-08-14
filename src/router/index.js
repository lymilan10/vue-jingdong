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
<<<<<<< HEAD
        path: 'index',
        name: 'index',
        component: () => import('../views/Index.vue')
      },
      {
=======
>>>>>>> 5edcd7a0f9cb38563e4e4bb19e4db7c2c5393d7c
        path: 'list',
        name: 'list',
        component: () => import('../views/List.vue')
      },
      {
<<<<<<< HEAD
=======
        path: 'mine',
        name: 'mine',
        component: () => import('../views/Mine.vue')
      },
      {
>>>>>>> 5edcd7a0f9cb38563e4e4bb19e4db7c2c5393d7c
        path: 'search',
        name: 'search',
        component: () => import('../views/Search.vue')
      },
      {
        path: 'cart',
        name: 'cart',
<<<<<<< HEAD
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
=======
        component: () => import('../views/Cart.vue')
      },
      {
        path: 'index',
        name: 'index',
        component: () => import('../views/Index.vue')
      }
>>>>>>> 5edcd7a0f9cb38563e4e4bb19e4db7c2c5393d7c
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
