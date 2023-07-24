import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeViewVue from '../views/file1.vue'
//import Home from '../views/home.vue'
//import App from '../App.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: 'denglu',
  },
  {
    path: '/denglu',
    name: 'denglu',
    component: () => import('../denglu.vue')

  },
  {
    path: '/zhuce',
    name: 'zhuce',
    component: () => import('../zhuce.vue')

  },
  {
    path: '/home',
    name: 'home',
    //redirect:'home',
    component: () => import('../views/home.vue'),
    children: [
         /*   {
     path: '/home',
     name: 'home',
     //redirect:'home',
     component: () => import('../views/home.vue'),

   },  */{
        path: '/file1',
        name: 'file1',
        meta :{
          keepAlive:true
        },
        //redirect:'file1',
        component: () => import('../views/file1.vue'),
      },
      {
        path: '/file2',
        name: 'file2',
        meta :{
          keepAlive:true
        },
        component: () => import('../views/file2.vue'),

      },
      {
        path: '/file3',
        name: 'file3',
        component: () => import('../views/file3.vue'),

      },
      ,
      {
        path: '/file4',
        name: 'file4',
        component: () => import('../views/file4.vue'),

      },
      {
        path: '/shiyan2',
        name: 'shiyan2',
        component: () => import('../views/shiyan2.vue'),

      }
    ]
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
