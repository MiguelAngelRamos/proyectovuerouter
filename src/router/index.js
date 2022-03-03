import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// app.js

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/user/:id',
    name: 'User',
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import(/*webpackChunkName: "uses" */ '../views/Users.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'Error404',
    component: () => import(/*webpackChunkName: "error404" */ '../views/Error404.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
