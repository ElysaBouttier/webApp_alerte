import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/adminAlertView',
    name: 'AdminAlertView',
    component: () => import('../views/AdminAlertView.vue')
  },
  {
    path: '/adminManagmentView',
    name: 'AdminManagmentView',
    component: () => import('../views/AdminManagmentView.vue')
  },
  {
    path: '/adminUserView',
    name: 'AdminUserView',
    component: () => import('../views/AdminUserView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
