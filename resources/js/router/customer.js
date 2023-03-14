const routesCustomer = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../customer/views/HomeView.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../customer/views/AboutView.vue')
    },
    {
        path: '/about-history',
        name: 'Sejarah',
        component: () => import(/* webpackChunkName: "about" */ '../customer/views/AboutHistoryView.vue')
    },
    {
        path: '/about-profile',
        name: 'Profil Perusahaan',
        component: () => import(/* webpackChunkName: "about" */ '../customer/views/AboutProfileView.vue')
    },
    {
        path: '/about-vision-and-mission',
        name: 'Visi Dan Misi',
        component: () => import(/* webpackChunkName: "about" */ '../customer/views/AboutVisionAndMissionView.vue')
    },
    {
        path: '/about-organizational-structure',
        name: 'Struktur Organisasi',
        component: () => import(/* webpackChunkName: "about" */ '../customer/views/AboutOrganizationalStructureView.vue')
    },
    {
        path: '/contact',
        name: 'Kontak',
        component: () => import(/* webpackChunkName: "contact" */ '../customer/views/ContactView.vue')
    },
    {
        path: '/news',
        name: 'Berita',
        component: () => import(/* webpackChunkName: "news" */ '../customer/views/NewsView.vue')
    },
    {
        path: '/news/:id/detail',
        name: 'Detail Berita',
        component: () => import(/* webpackChunkName: "news" */ '../customer/views/NewsDetailView.vue')
    },
    {
        path: '/news-auction',
        name: 'Berita Lelang',
        component: () => import(/* webpackChunkName: "news" */ '../customer/views/NewsAuctionView.vue')
    },
    {
        path: '/news-auction/:id/detail',
        name: 'Detail Berita Lelang',
        component: () => import(/* webpackChunkName: "news" */ '../customer/views/NewsAuctionDetailView.vue')
    },
    {
        path: '/news-promotion',
        name: 'Berita Promo',
        component: () => import(/* webpackChunkName: "news" */ '../customer/views/NewsPromotionView.vue')
    },
    {
        path: '/news-promotion/:id/detail',
        name: 'Detail Berita Promo',
        component: () => import(/* webpackChunkName: "news" */ '../customer/views/NewsPromotionDetailView.vue')
    },
    {
        path: '/product/:product/:productChild?',
        name: 'Produk',
        component: () => import(/* webpackChunkName: "product" */ '../customer/views/ProductView.vue')
    }
]

export default {
    routesCustomer
}