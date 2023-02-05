const routesCustomer = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/about-history',
        name: 'Sejarah',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutHistoryView.vue')
    },
    {
        path: '/about-profile',
        name: 'Profil Perusahaan',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutProfileView.vue')
    },
    {
        path: '/about-vision-and-mission',
        name: 'Visi Dan Misi',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutVisionAndMission.vue')
    },
    {
        path: '/about-organizational-structure',
        name: 'Struktur Organisasi',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutVisionAndMission.vue')
    },
    {
        path: '/news',
        name: 'Berita',
        component: () => import(/* webpackChunkName: "news" */ '../views/NewsView.vue')
    },
    {
        path: '/product/:product/:productChild?',
        name: 'Produk',
        component: () => import(/* webpackChunkName: "product" */ '../views/ProductView.vue')
    }
]

export default {
    routesCustomer
}