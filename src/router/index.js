import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import { AmplifyEventBus } from 'aws-amplify-vue';
import {getUser} from '../utils/auth.js'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { requiresAuth: true },
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import(/* webpackChunkName: "signup" */ '../views/Signup.vue'),
      meta: { requiresAuth: false },
    },
    {
      path: '/signUpConfirm',
      name: 'signUpConfirm',
      component: () => import(/* webpackChunkName: "confirm" */ '../views/SignUpConfirm.vue'),
      meta: { requiresAuth: false },
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "signin" */ '../views/Login.vue'),
      meta: { requiresAuth: false },
    },
  ]
})

getUser().then((user) => {
  if (user) {
    router.push({path: '/'})
  }
})

AmplifyEventBus.$on('authState', async (state) => {
  const pushPathes = {
    signedOut: () => {
      router.push({path: '/signin'})
    },
    signUp: () => {
      router.push({path: '/signUp'})
    },
    confirmSignUp: () => {
      router.push({path: '/signUpConfirm'})
    },
    signIn: () => {
      router.push({path: '/login'})
    },
    signedIn: () => {
      router.push({path: '/'})
    }
  }
  if (typeof pushPathes[state] === 'function') {
    pushPathes[state]()
  }
})

router.beforeResolve(async (to, from, next) => {
  const user = await getUser()
  if (!user) {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      return next({
        path: '/signin',
      })
    }
  } else {
    if (to.matched.some((record) => typeof(record.meta.requiresAuth) === "boolean" && !record.meta.requiresAuth)) {
      return next({
        path: '/',
      })
    }
  }
  return next()
})

export default router
