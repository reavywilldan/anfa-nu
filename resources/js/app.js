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
        },
        currencyNumberFormat(number) {
            number = number || 0
            number = Number(number)

            const currency = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(number)

            return currency
        },
        numberFormat(number) {
            number = number || 0
            number = Number(number)

            number = number.toLocaleString('id')

            return number
        }
    },
})

Vue.mount('#app')
