<template>
    <div class="home">

        <body>
            <HeaderComponent />

            <main id="main">
                <section id="faq" class="faq">
                    <div class="container">
                        <TitlePageComponent msg="Profil Perusahan" />

                        <div v-show="profile.length > 0" v-for="profile in profiles" :key="profile.name"
                            class="row faq-item d-flex align-items-stretch">
                            <div class="col-lg-5">
                                <i class="ri-check-double-fill"></i>
                                <h4>{{ profile.name }}</h4>
                            </div>
                            <div class="col-lg-7">
                                <p>
                                    {{ profile.value }}
                                </p>
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
import HeaderComponent from '@/components/customer/Header.vue'
import FooterComponent from '@/components/customer/Footer.vue'
import TitlePageComponent from '@/components/customer/TitlePage.vue'
import ContactUsComponent from '@/components/customer/ContactUs.vue'

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
            profiles: []
        }
    },
    created() {
        this.profiles = config.profile
    }
}
</script>
