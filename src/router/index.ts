import { createRouter ,createWebHashHistory, RouteRecordRaw} from 'vue-router';

const routes: Array<RouteRecordRaw> = [{
  path: '/login',
  name: 'Login',
  meta: {
    title: '登录',
  },
  component: () => import('/@/views/login/index.vue'),
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router