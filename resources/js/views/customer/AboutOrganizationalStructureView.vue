<template>
    <div class="home">

        <body>
            <HeaderComponent />

            <main id="main">
                <section id="about" class="about">
                    <div class="container">

                        <TitlePageComponent msg="Struktur Organisasi" />

                        <div class="image-fluid">hha</div>

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
