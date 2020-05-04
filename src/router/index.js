import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


import Survey from '@/components/Survey.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create-quiz',
    name: 'Create',
    component: () => import('../views/Create.vue')
  } ,
  {
    path: '/default-quiz',
    name: 'Default',
    component: () => import('../views/Default.vue')
  },
  {
    path: '/surveys/:id',
    component: Survey
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue')
  },
  {
    path: '/signupconfirm',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUpConfirm.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
