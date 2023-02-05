import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import _ from 'lodash';

const Vue = createApp(App)

Vue.use(router)

Vue.mixin({
    methods: {
        currentDate() {
            const current = new Date()
            return current.getFullYear()
        },
        groupedArr(arr) {
            return _.chunk(arr, 2)
        }
    },
})

Vue.mount('#app')
