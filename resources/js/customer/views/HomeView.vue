<template>
    <div class="home">

        <body>
            <HeaderComponent />
            <HeroComponent />

            <main id="main">
                <section id="about" class="about">
                    <div class="container">

                        <div class="section-title">
                            <h2>Tentang Kami</h2>
                        </div>

                        <div class="row content">
                            <div class="col-lg-6 text-left">
                                <h1>MENGANGKAT STATUS SOSIAL EKONOMI MASYARAKAT</h1>
                            </div>
                            <div class="col-lg-6 pt-4 pt-lg-0 text-left">
                                <p>
                                    menjadi lembaga keuangan yang mandiri dan konsisten terhadap ketentuan syariah, memberi
                                    manfaat dan
                                    mampu
                                    mengangkat status sosial ekonomi masyarakat menuju kesejahteraan yang diridhoi Allah
                                    Taala
                                </p>
                                <!-- <a href="#" class="btn-learn-more">Learn More</a> -->
                            </div>
                        </div>

                        <section id="counts" class="counts">
                            <div class="container">

                                <div class="row">
                                    <div
                                        class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start">
                                        <img src="/img/counts-img.svg" alt="" class="img-fluid">
                                    </div>

                                    <div class="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0">
                                        <div class="content d-flex flex-column justify-content-center">
                                            <div class="row">
                                                <div class="col-md-6 d-md-flex align-items-md-stretch">
                                                    <div class="count-box">
                                                        <i class="icofont-man-in-glasses"></i>
                                                        <span>TERBAIK DI BIDANGNYA</span>
                                                        <p>
                                                            Jajaran BMT ANFA NU yang terbaik di bidangnya
                                                        </p>
                                                    </div>
                                                </div>

                                                <div class="col-md-6 d-md-flex align-items-md-stretch">
                                                    <div class="count-box">
                                                        <i class="icofont-simple-smile"></i>
                                                        <span>MELAYANI SEPENUH HATI</span>
                                                        <p>
                                                            Kami siap melayani para Anggota BMT ANFA NU
                                                        </p>
                                                    </div>
                                                </div>

                                                <div class="col-md-6 d-md-flex align-items-md-stretch">
                                                    <div class="count-box">
                                                        <i class="icofont-people"></i>
                                                        <span>HALAL DAN BAROKAH</span>
                                                        <p>
                                                            Produk BMT ANFA NU sesuai dan berlandaskan prinsip Syariah
                                                        </p>
                                                    </div>
                                                </div>

                                                <div class="col-md-6 d-md-flex align-items-md-stretch">
                                                    <div class="count-box">
                                                        <i class="icofont-coins"></i>
                                                        <span>BERMANFAAT</span>
                                                        <p>
                                                            Hadir dengan memberikan manfaat untuk masyarakat
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>

                        <!-- <section id="services" class="services">
                            <div class="container">

                                <div class="section-title">
                                    <h2>Produk</h2>
                                </div>

                                <div class="row">
                                    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                        <div class="icon-box">
                                            <div class="icon"><i class="bx bxl-dribbble"></i></div>
                                            <h4 class="title"><a href="">Lorem Ipsum</a></h4>
                                            <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas
                                                molestias excepturi
                                            </p>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                        <div class="icon-box">
                                            <div class="icon"><i class="bx bx-file"></i></div>
                                            <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
                                            <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit
                                                esse cillum
                                                dolore</p>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                        <div class="icon-box">
                                            <div class="icon"><i class="bx bx-tachometer"></i></div>
                                            <h4 class="title"><a href="">Magni Dolores</a></h4>
                                            <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in
                                                culpa qui officia
                                            </p>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                        <div class="icon-box">
                                            <div class="icon"><i class="bx bx-world"></i></div>
                                            <h4 class="title"><a href="">Nemo Enim</a></h4>
                                            <p class="description">At vero eos et accusamus et iusto odio dignissimos
                                                ducimus qui blanditiis
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </section> -->

                        <section v-show="news.length > 0" id="testimonials" class="testimonials">
                            <div class="container">

                                <div class="section-title">
                                    <h2>Promo</h2>
                                    <p>Karena Kami selalu mencoba memahami Anda</p>
                                </div>

                                <carousel :autoplay="3000" :items-to-show="2" :wrap-around="true">
                                    <slide v-for="newsItem in news" :key="newsItem.id">
                                        <div class="container">
                                            <a v-bind:href="'/news-promotion/' + newsItem.id + '/detail'">
                                                <img class="mw-100" v-bind:src="'/img/' + newsItem.oldest_news_media.name">
                                            </a>
                                        </div>

                                    </slide>
                                    <template #addons>
                                        <navigation />
                                        <pagination />
                                    </template>
                                </carousel>

                            </div>
                        </section>

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
import HeroComponent from '@/customer/components/Hero.vue'
import ContactUsComponent from '@/customer/components/ContactUs.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import newsPromotionServices from '../../services/newsPromotion'

export default {
    name: 'HomeView',
    components: {
        HeaderComponent,
        HeroComponent,
        FooterComponent,
        ContactUsComponent,
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data() {
        return {
            news: []
        }
    },
    methods: {
        async loadDataFromServer() {
            try {
                const obj = {
                    page: 1,
                    limit: 3
                }

                const result = await newsPromotionServices.getNews(obj)

                if (result.data.length) {
                    this.news.push(...result.data)
                }
            } catch (err) { }
        }
    },
    async mounted() {
        await this.loadDataFromServer()
    }
}
</script>
