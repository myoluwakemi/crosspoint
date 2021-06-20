import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=> import("../views/Home")
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/dashboard',
    component: () => import('@/views/Authorized'),
    // redirect: {name: 'Dashboard'},
    children: [
      {
        path: '',
        component: () => import('@/views/dashboard/Dashboard'),
        name: 'Dashboard'
      },
      {
        path: '/plans',
        name: 'Plans',
        component: () => import('@/components/dashboard/userDashboard/Plans')
      },
      {
        path: '/documents',
        name: 'Documents',
        component: () => import('@/components/dashboard/Documents')
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import('@/components/dashboard/Profile')
      },
      {
        path: '/claims',
        name: 'Claims',
        component: () => import('@/components/dashboard/userDashboard/Claims/Claims')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
