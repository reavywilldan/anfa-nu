import { createRouter, createWebHashHistory } from 'vue-router'

import routesCustomer from './customer'
const routeCustomer = routesCustomer.routesCustomer

const arrConcat = routeCustomer

const routes = arrConcat

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  }

})

export default router
