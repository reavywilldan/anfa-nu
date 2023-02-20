import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
                'resources/js/customer/assets/vendor/bootstrap/css/bootstrap.min.css',
                'resources/js/customer/assets/vendor/icofont/icofont.min.css',
                'resources/js/customer/assets/vendor/remixicon/remixicon.css',
                'resources/js/customer/assets/vendor/boxicons/css/boxicons.min.css',
                'resources/js/customer/assets/vendor/owl.carousel/assets/owl.carousel.min.css',
                'resources/js/customer/assets/vendor/venobox/venobox.css',
                'resources/js/customer/assets/vendor/aos/aos.css',
                'resources/js/customer/assets/css/style.css'
            ],
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
