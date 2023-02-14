const routesCustomer = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/customer/HomeView.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/customer/AboutView.vue')
    },
    {
        path: '/about-history',
        name: 'Sejarah',
        component: () => import(/* webpackChunkName: "about" */ '../views/customer/AboutHistoryView.vue')
    },
    {
        path: '/about-profile',
        name: 'Profil Perusahaan',
        component: () => import(/* webpackChunkName: "about" */ '../views/customer/AboutProfileView.vue')
    },
    {
        path: '/about-vision-and-mission',
        name: 'Visi Dan Misi',
        component: () => import(/* webpackChunkName: "about" */ '../views/customer/AboutVisionAndMission.vue')
    },
    {
        path: '/about-organizational-structure',
        name: 'Struktur Organisasi',
        component: () => import(/* webpackChunkName: "about" */ '../views/customer/AboutOrganizationalStructureView.vue')
    },
    {
        path: '/news',
        name: 'Berita',
        component: () => import(/* webpackChunkName: "news" */ '../views/customer/NewsView.vue')
    },
    {
        path: '/product/:product/:productChild?',
        name: 'Produk',
        component: () => import(/* webpackChunkName: "product" */ '../views/customer/ProductView.vue')
    }
]

export default {
    routesCustomer
}