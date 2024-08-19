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
    path: '/aboutIndex',
    name: 'aboutIndex',
    component: () => import('../views/aboutUs/index.vue')
  },
  {
    path: '/businessIndex',
    name: 'businessIndex',
    component: () => import('../views/business/index.vue')
  },
  {
    path: '/continuedIndex',
    name: 'continuedIndex',
    component: () => import('../views/continued/index.vue')
  },
  {
    path: '/mediaIndex',
    name: 'mediaIndex',
    component: () => import('../views/media/index.vue')
  },
  {
    path: '/developmentIndex',
    name: 'developmentIndex',
    component: () => import('../views/development/index.vue')
  },
  {
    path: '/resourcesIndex',
    name: 'resourcesIndex',
    component: () => import('../views/resources/index.vue')
  },
  
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
