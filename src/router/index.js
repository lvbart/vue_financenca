import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/home/Home.vue';
import Documents from '../views/documents/Documents.vue';
import Sort from '../views/sort/Sort.vue';
import My from '../views/my/My.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/documents',
    component: Documents,
  },
  {
    path: '/sort',
    component: Sort,
  },
  {
    path: '/my',
    component: My,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
