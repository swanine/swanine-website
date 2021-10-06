import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/',
    meta: {
      title: 'Swanine'
    },
    children: [
      {
        path: '/',
        component: () => import('../views/home/home.vue')
      },
      {
        path: '/about',
        name: 'About',
        meta: {
          title: 'About'
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/about/index.vue')
      },
      {
        path: '/projects',
        meta: {
          title: 'Projects'
        },
        component: () => import('../views/project/index.vue')
      },
      {
        path: '/resume',
        component: () => import('../views/resume/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  if (typeof (to.meta.title) === 'string') {
    document.title = to.meta.title
  }
})

export default router
