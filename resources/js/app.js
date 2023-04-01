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
            let dateObject = new Date(date)

            if (dateObject) {
                return dateObject.getFullYear() + '-' + (dateObject.getMonth() + 1) + '-' + dateObject.getDate()
            }

            return ''
        }
    },
})

Vue.mount('#app')
