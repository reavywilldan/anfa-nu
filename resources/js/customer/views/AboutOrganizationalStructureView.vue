<template>
    <div class="home">

        <body>
            <HeaderComponent />

            <main id="main">
                <section id="about" class="about">
                    <div class="container">

                        <TitlePageComponent msg="Struktur Organisasi" />
                        <img class="img-fluid mw-100" src="/img/chart-bmt-anfa-nu.png">
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
    }
}
</script>
