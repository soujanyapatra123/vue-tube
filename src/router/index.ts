import { createRouter, createWebHistory } from 'vue-router'
import { isEmpty } from 'lodash'

// Method
const checkAuth = () => {
  const isLogin = JSON.parse(localStorage.getItem('user'))

  return !isEmpty(isLogin)
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/',
      component: () => import('../layouts/default.vue'),
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('../pages/home.vue'),
        },
        {
          path: 'trending',
          name: 'Trending',
          component: () => import('../pages/trending.vue'),
        },
        {
          path: '/watch',
          name: 'WatchVideo',
          component: () => import('../pages/watch.vue'),
        },
        {
          path: 'subscription',
          name: 'subscription',
          component: () => import('../pages/subscription.vue'),
        },
        {
          path: 'history',
          name: 'history',
          component: () => import('../pages/history.vue'),
        },
        {
          path: 'watch-later',
          name: 'watch-later',
          component: () => import('../pages/watch-later.vue'),
        },
        {
          path: 'liked',
          name: 'liked',
          component: () => import('../pages/liked.vue'),
        },
        {
          path: '/feed/you',
          name: 'you',
          component: () => import('../pages/feed/you.vue'),
        },
      ],
    },
    {
      path: '/',
      component: () => import('../layouts/blank.vue'),
      children: [
        {
          path: 'login',
          name: 'Login',
          component: () => import('../pages/login.vue'),
        },
        {
          path: 'register',
          name: 'Register',
          component: () => import('../pages/register.vue'),
        },
        {
          path: '/:pathMatch(.*)*',
          component: () => import('../pages/[...all].vue'),
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  localStorage.setItem('activeTab', to?.name)
  if (to.name !== 'Login' && !checkAuth())
    next({ name: 'Login' })
  else if (checkAuth() && (to.name === 'Login' || to.name === 'Register'))
    next({ name: 'Home' })
  else
    next()
})

router.afterEach(() => {
  // progress?.finish()
})

export default router
