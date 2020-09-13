import { createRouter, createWebHashHistory } from 'vue-router';
import Main from '../views/Main.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/tasksforyear',
    name: 'TasksForYear',
    component: () => import('../views/TasksForYear.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;
