<template>
    <div class="home">

        <body>
            <HeaderComponent />

            <main id="main">
                <section id="more-services" class="more-services">
                    <div class="container">

                        <TitlePageComponent msg="Berita" />

                        <div class="row">
                            <div class="col-md-6 d-flex align-items-stretch mt-4" v-for="newsData in news"
                                :key="newsData.id" :id="newsData.id">
                                <div class="card" style='background-image: url("/img/more-services-1.jpg");'>
                                    <div class="card-body">
                                        <h5 class="card-title"><a href="">{{ newsData.title }}</a></h5>
                         
                                        <div class="read-more">
                                            <a href="/news/1/detail"><i class="icofont-arrow-right"></i>
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="text-center mt-5">
                            <button @click="loadDataFromServer" v-if="!noResult" type="button" class="btn text-white"
                                style="background-color: #1d6c2f;">
                                Load More
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <ContactUsComponent />
            <FooterComponent />
        </body>

    </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/customer/components/Header.vue'
import FooterComponent from '@/customer/components/Footer.vue'
import TitlePageComponent from '@/customer/components/TitlePage.vue'
import ContactUsComponent from '@/customer/components/ContactUs.vue'

import newsServices from '../../services/news'


export default {
    name: 'HomeView',
    components: {
        HeaderComponent,
        FooterComponent,
        TitlePageComponent,
        ContactUsComponent,
    },
    data() {
        return {
            news: [],
            page: 1,
            noResult: false,
            message: ""
        }
    },
    methods: {
        async loadDataFromServer() {
            try {
                const result = await newsServices.getNews(this.page)

                if (result.data.length) {
                    this.news.push(...result.data);
                    this.page++;
                } else {
                    this.noResult = true;
                    this.message = "No result found";
                }
            } catch (err) {
                this.noResult = true;
                this.message = "Error loading data";
            }
        },
    },

    async mounted() {
        await this.loadDataFromServer()
    }
}
</script>
