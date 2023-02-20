<template>
    <div class="home">

        <body>
            <HeaderComponent />

            <main id="main">
                <section id="more-services" class="more-services">
                    <div class="container">

                        <TitlePageComponent msg="Berita" />

                        <NewsDetailComponent :msg="idNews" />
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
import NewsDetailComponent from '@/customer/components/NewsDetail.vue'

export default {
    name: 'HomeView',
    components: {
        HeaderComponent,
        FooterComponent,
        TitlePageComponent,
        ContactUsComponent,
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
            },
            immediate: true
        }
    }
}
</script>
