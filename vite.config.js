import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

const customer = [
    'resources/js/customer/assets/vendor/bootstrap/css/bootstrap.min.css',
    'resources/js/customer/assets/vendor/icofont/icofont.min.css',
    'resources/js/customer/assets/vendor/remixicon/remixicon.css',
    'resources/js/customer/assets/vendor/boxicons/css/boxicons.min.css',
    'resources/js/customer/assets/vendor/owl.carousel/assets/owl.carousel.min.css',
    'resources/js/customer/assets/vendor/venobox/venobox.css',
    'resources/js/customer/assets/vendor/aos/aos.css',
    'resources/js/customer/assets/css/style.css'
]

const admin = [
    'resources/js/admin/assets/css/nucleo-icons.css',
    'resources/js/admin/assets/css/nucleo-svg.css',
    'resources/js/admin/assets/css/argon-dashboard.css',
    'resources/js/admin/assets/js/core/popper.min.js',
    'resources/js/admin/assets/js/core/bootstrap.min.js',
    'resources/js/admin/assets/js/plugins/perfect-scrollbar.min.js',
    'resources/js/admin/assets/js/plugins/smooth-scrollbar.min.js',
    'resources/js/admin/assets/js/plugins/chartjs.min.js',
    'resources/js/admin/assets/js/argon-dashboard.min.js',
]

const general = [
    'resources/sass/app.scss',
    'resources/js/app.js',
]

let concatResource = customer.concat(admin)
concatResource = concatResource.concat(general)

export default defineConfig({
    plugins: [
        laravel({
            input: concatResource,
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
        },
    },
});
