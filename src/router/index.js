import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/home/Home.vue';
import Cart from '../views/cart/Cart.vue';
import Sort from '../views/sort/Sort.vue';
import My from '../views/my/My.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/cart',
    component: Cart,
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
