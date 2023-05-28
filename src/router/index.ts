import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LocalCache from '@/utils/cache'
import { mapMenusToRoutes } from '@/utils/map-menu'
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
  const userMenus = (store.state as any).login.userMenus
  //UserMenus =>routes
  const routes = mapMenusToRoutes(userMenus)
  //将routes=>router.main.children
  routes.map((route) => {
    router.addRoute('main', route)
  })
})

export default router
