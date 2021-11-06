import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainHome',
    component: () => import(/* webpackChunkName: "about" */ '../views/MainHome.vue')
  },
  {
    path: '/advertisement',
    name: 'Advertisement',
    component: () => import('../views/pages/Advertisement.vue')
  },
  {
    path: '/business',
    name: 'Business',
    component: () => import('../views/pages/Business.vue')
  },
  {
    path: '/company',
    name: 'Company',
    component: () => import('../views/pages/Company.vue')
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('../views/pages/History.vue')
  },
  {
    path: '/recruit',
    name: 'Recruit',  
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/Recruit.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
