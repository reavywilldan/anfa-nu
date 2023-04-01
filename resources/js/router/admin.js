import store from '@/store'

const notAuthenticatedRoutesAdmin = [
    {
        path: '/admstr/login',
        name: 'Admin - Login',
        component: () => import(/* webpackChunkName: "admin" */ '../admin/views/LoginView.vue'),
        beforeEnter() {
            if (store.state.auth.authenticated) {
                return '/admstr'
            }
        }
    }
]

const authenticatedRoutesAdmin = [
    {
        path: '/admstr',
        children: [
            {
                path: '/admstr',
                name: 'Admin - Home',
                component: () => import(/* webpackChunkName: "admin" */ '../admin/views/HomeView.vue')
            },
            {
                path: '/admstr/category-news',
                name: 'Admin - Kategori Berita',
                component: () => import(/* webpackChunkName: "admin" */ '../admin/views/NewsCategoryView.vue')
            },
            {
                path: '/admstr/add-category-news',
                name: 'Admin - Tambah Kategori Berita',
                component: () => import(/* webpackChunkName: "admin" */ '../admin/views/AddNewsCategoryView.vue')
            },
            {
                path: '/admstr/edit-category-news/:id',
                name: 'Admin - Edit Kategori Berita',
                component: () => import(/* webpackChunkName: "admin" */ '../admin/views/EditNewsCategoryView.vue')
            },
            {
                path: '/admstr/news',
                name: 'Admin - Berita',
                component: () => import(/* webpackChunkName: "admin" */ '../admin/views/NewsView.vue')
            },
            {
                path: '/admstr/detail-news/:id',
                name: 'Admin - Detail Berita',
                component: () => import(/* webpackChunkName: "admin" */ '../admin/views/NewsDetailView.vue')
            },
            {
                path: '/admstr/add-news',
                name: 'Admin - Tambah Berita',
                component: () => import(/* webpackChunkName: "admin" */ '../admin/views/AddNewsView.vue')
            },
            {
                path: '/admstr/promotion',
                name: 'Admin - Promo',
                component: () => import(/* webpackChunkName: "admin" */ '../admin/views/PromotionView.vue')
            },
            {
                path: '/admstr/detail-promotion/:id',
                name: 'Admin - Detail Promo',
                component: () => import(/* webpackChunkName: "admin" */ '../admin/views/PromotionDetailView.vue')
            },
            {
                path: '/admstr/add-promotion',
                name: 'Admin - Tambah Promo',
                component: () => import(/* webpackChunkName: "admin" */ '../admin/views/AddPromotionView.vue')
            },
            {
                path: '/admstr/users',
                name: 'Admin - User',
                component: () => import(/* webpackChunkName: "admin" */ '../admin/views/UsersView.vue')
            },
            {
                path: '/admstr/add-users',
                name: 'Admin - Tambah User',
                component: () => import(/* webpackChunkName: "admin" */ '../admin/views/AddUsersView.vue')
            },
            {
                path: '/admstr/profile',
                name: 'Admin - Profile',
                component: () => import(/* webpackChunkName: "admin" */ '../admin/views/ProfileView.vue')
            },
            {
                path: '/admstr/profile-password',
                name: 'Admin - Profile Password',
                component: () => import(/* webpackChunkName: "admin" */ '../admin/views/ProfilePasswordView.vue')
            },
            {
                path: '/admstr/product-submission/:status?',
                name: 'Admin - Pengajuan Pembiayaan',
                component: () => import(/* webpackChunkName: "admin" */ '../admin/views/ProductSubmissionView.vue')
            },
            {
                path: '/admstr/detail-product-submission/:id',
                name: 'Admin - Detail Pengajuan Pembiayaan',
                component: () => import(/* webpackChunkName: "admin" */ '../admin/views/ProductSubmissionDetailView.vue')
            },
            {
                path: '/admstr/customer-list',
                name: 'Admin - List Customer',
                component: () => import(/* webpackChunkName: "admin" */ '../admin/views/CustomerListView.vue')
            }
        ],
        beforeEnter() {
            if (!store.state.auth.authenticated) {
                return '/admstr/login'
            }
        }
    }
]

const routesAdmin = notAuthenticatedRoutesAdmin.concat(authenticatedRoutesAdmin)

export default {
    routesAdmin
}
