import Vue from 'vue'
import VueRouter from 'vue-router'
import PassChange from '../views/pass-change.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth/change-password/:token',
    name: 'PassChange',
    component: PassChange
  },
  {
    path: "/admin/full-summary",
    name: "FullSummaryRoute",
    component: () => import("../views/full-summary.vue")
  },
  {
    path: '*',
    name: '404',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
