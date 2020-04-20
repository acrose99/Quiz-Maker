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
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
