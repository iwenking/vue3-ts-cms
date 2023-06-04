import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LocalCache from '@/utils/cache'
import { mapMenusToRoutes, firstMenu } from '@/utils/map-menu'
import store from '@/store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
    // children: []
  },
  {
    path: '/:pathMtch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
//导航守卫
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = LocalCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
  if (to.path === '/main') {
    return firstMenu.url
  }

  // if (to.path.indexOf('/main') !== -1) {
  //   if (to.name === 'not-found') {
  //     to.name = 'user'
  //   }
  // }
})

export default router
