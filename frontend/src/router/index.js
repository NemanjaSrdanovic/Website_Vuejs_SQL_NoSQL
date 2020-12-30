import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Account from '@/views/Account.vue'
import Login from '@/views/Login.vue' 
import Cart from '@/views/Cart.vue' 
import Axios from 'axios'


Vue.use(VueRouter)

Axios.defaults.baseURL = 'http://localhost:8000/api/';

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }

  //CART
]

const router = new VueRouter({
  routes
})

export default router

