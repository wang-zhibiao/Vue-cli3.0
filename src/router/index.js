import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
    children: [
      {
        path: 'Home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ '../views/Home/index.vue')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About/About.vue')
      },
      {
        path: 'Game',
        name: 'Game',
        component: () => import(/* webpackChunkName: "Game" */ '../views/Game/Game.vue')
      },
      {
        path: 'Join',
        name: 'Join',
        component: () => import(/* webpackChunkName: "Join" */ '../views/Join/Join.vue')
      },
      {
        path: 'Campus',
        name: 'Campus',
        component: () => import(/* webpackChunkName: "Campus" */ '../views/other/Campus.vue')
      },
      {
        path: 'Party',
        name: 'Party',
        component: () => import(/* webpackChunkName: "Party" */ '../views/other/Party.vue')
      },
      {
        path: 'School',
        name: 'School',
        component: () => import(/* webpackChunkName: "School" */ '../views/other/School.vue')
      }
    ]
  },

]
//history  hash切换
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
