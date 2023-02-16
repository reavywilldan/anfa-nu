<template>
    <div class="home">

        <body>
            <HeaderComponent />

            <main id="main">
                <section id="more-services" class="more-services">
                    <div class="container">

                        <TitlePageComponent msg="Kontak" />

                        <div class="row">
                            <div class="col-md-6 d-flex align-items-stretch mt-4" v-for="office in offices"
                                :key="office.name" :id="office.name">
                                <div class="card" style='background-image: url("/img/more-services-1.jpg");'>
                                    <div class="card-body">
                                        <h5 class="card-title"><a href="">{{ office.name }}</a></h5>
                                        <p class="card-text">
                                            {{ office.address }}
                                            <br>
                                            Telp. {{ office.phone }}
                                        </p>
                                    </div>
                                </div>
                            </div>
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

import config from '../../../config'

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
            offices: []
        }
    },
    created() {
        this.offices = config.office
    }
}
</script>
