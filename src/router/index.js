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
    path: "/report/:token/properties",
    name: "Report",
    component: () => import("../views/fullreport.vue")
  },
  {
    path: "/report/:token/property/:property_id",
    name: "SinglePropertyReport",
    component: () => import("../views/single_property_report.vue")
  },
  {
    path: "/properties/:property_id/code/:receipt_id",
    name: "Receipt",
    component: () => import("../views/tenant_receipt.vue")
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
