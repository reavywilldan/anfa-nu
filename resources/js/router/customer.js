const routesCustomer = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/about-history',
        name: 'aboutHistory',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutHistoryView.vue')
    },
    {
        path: '/about-profile',
        name: 'aboutProfile',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutProfileView.vue')
    },
    {
        path: '/news',
        name: 'news',
        component: () => import(/* webpackChunkName: "about" */ '../views/NewsView.vue')
    }
]

export default {
    routesCustomer
}