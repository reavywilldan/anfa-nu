import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import _ from 'lodash';

const Vue = createApp(App)

Vue.use(router)
Vue.use(store)

Vue.mixin({
    methods: {
        currentDate() {
            const current = new Date()
            return current.getFullYear()
        },
        groupedArr(arr) {
            return _.chunk(arr, 2)
        },
        formatDate(date) {
            let dates = new Date(date)
            return dates.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        }
    },
})

Vue.mount('#app')
