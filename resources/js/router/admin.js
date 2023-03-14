import store from '@/store'

const notAuthenticatedRoutesAdmin = [
    {
        path: '/admstr/login',
        name: 'Admin Login',
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
                path: '/admstr/add-news',
                name: 'Admin - Tambah Berita',
                component: () => import(/* webpackChunkName: "admin" */ '../admin/views/AddNewsView.vue')
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