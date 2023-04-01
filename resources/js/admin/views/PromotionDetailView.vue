<template>
    <body class="g-sidenav-show bg-gray-100">
        <SideNavComponent />
        <main class="main-content position-relative border-radius-lg ">
            <div class="container-fluid py-4">
                <div class="row">
                    <div class="col-12">
                        <div class="card mb-4">
                            <div class="card-header pb-0">
                                <h6>Detail Promo</h6>
                            </div>
                            <NewsDetailComponent :data="dataNews" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </body>
</template>

<script>
// @ is an alias to /src
import SideNavComponent from '@/admin/components/SideNav.vue'
import NewsDetailComponent from '@/admin/components/NewsDetail.vue'

import store from '@/store'

import newsPromotionServices from '../../services/newsPromotion'

export default {
    name: 'AdminAddNews',
    components: {
        SideNavComponent,
        NewsDetailComponent
    },
    data() {
        return {
            dataNews: {},
            idNews: 0
        }
    },
    watch: {
        '$route.params': {
            handler(newValue) {
                this.idNews = newValue.id
                this.loadDataFromServer(newValue.id)
            },
            immediate: true
        }
    },
    methods: {
        async loadDataFromServer(id) {
            try {
                const result = await newsPromotionServices.getNewsById(id)
                this.dataNews = result
            } catch (err) {
                this.dataNews = {}
            }
        }
    },
}
</script>
