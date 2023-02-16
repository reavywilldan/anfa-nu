import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import routesCustomer from './customer'
const routeCustomer = routesCustomer.routesCustomer

const arrConcat = routeCustomer

const routes = arrConcat

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  }

})

router.beforeEach((to, from, next) => {
  document.title = `BMT ANFA NU - ${to.name}`;
  next();
});

export default router
