import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import store from '@/store'

import routesCustomer from './customer'
import routesAdmin from './admin'

const routeCustomer = routesCustomer.routesCustomer
const routeAdmin = routesAdmin.routesAdmin

const arrConcat = routeCustomer.concat(routeAdmin)

const routes = arrConcat

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' })
  }

})

router.beforeEach((to, from, next) => {
  const fullPath = to.fullPath

  if (fullPath.includes('admstr')) {
    document.title = `${to.name}`
    next()
  } else {
    document.title = `BMT ANFA NU - ${to.name}`
    next()
  }
})

export default router
