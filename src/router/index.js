import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeViewVue from '../views/file1.vue'
//import Home from '../views/home.vue'
//import App from '../App.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: 'index',
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index.vue')
  },
  {
    path: '/head',
    name: 'head',
    component: () => import('../views/head/index.vue')
  },
  {
    path: '/footer',
    name: 'footer',
    component: () => import('../views/footer/index.vue')
  },
  
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
