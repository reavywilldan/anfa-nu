<template>
    <div class="home">

        <body>
            <HeaderComponent />

            <main id="main">
                <section id="more-services" class="more-services">
                    <div class="container">

                        <TitlePageComponent msg="Berita" />

                        <div class="row">
                            <div class="col-md-6 d-flex align-items-stretch mt-4" v-for="company in visibleCompanies"
                                :key="company.id" :id="company.id">
                                <div class="card" style='background-image: url("/img/more-services-1.jpg");'>
                                    <div class="card-body">
                                        <h5 class="card-title"><a href="">Nive Lodo</a></h5>
                                        <p class="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut
                                            fugit, sed quia magni dolores.</p>
                                        <div class="read-more"><a href="#"><i class="icofont-arrow-right"></i> Read
                                                More</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="text-center mt-5">
                            <button @click="companiesVisible += step" v-if="companiesVisible < companies.length"
                                type="button" class="btn text-white" style="background-color: #1d6c2f;">
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

export default {
    name: 'HomeView',
    components: {
        HeaderComponent,
        FooterComponent,
        TitlePageComponent,
        ContactUsComponent
    },
    data() {
        return {
            companies: [
                { id: 1, name: "Company A" },
                { id: 2, name: "Company B" },
                { id: 3, name: "Company C" },
                { id: 4, name: "Company D" },
                { id: 5, name: "Company E" },
                { id: 6, name: "Company F" },
                { id: 7, name: "Company G" },
                { id: 8, name: "Company H" },
                { id: 9, name: "Company I" },
                { id: 10, name: "Company J" },
            ],
            companiesVisible: 4,
            step: 4,
        }
    },
    computed: {
        visibleCompanies() {
            return this.companies.slice(0, this.companiesVisible)
        }
    }
}
</script>
