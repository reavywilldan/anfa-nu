<template>
    <div class="home">

        <body>
            <HeaderComponent />

            <main id="main">
                <section id="about" class="about">
                    <div class="container">

                        <TitlePageComponent msg="Profil Perusahan" />

                        <div class="row faq-item d-flex align-items-stretch">
                            <div class="col-lg-3">
                                <h4>Nama Lembaga</h4>
                            </div>
                            <div class="col-lg-7">
                                <p>KSPPS BMT Anfa NU</p>
                            </div>
                        </div>

                        <div class="row faq-item d-flex align-items-stretch">
                            <div class="col-lg-3">
                                <h4>Alamat Email</h4>
                            </div>
                            <div class="col-lg-7">
                                <p>KSPS BMT Anfa NU</p>
                            </div>
                        </div>

                        <div class="row faq-item d-flex align-items-stretch">
                            <div class="col-lg-3">
                                <h4>Alamat Email</h4>
                            </div>
                            <div class="col-lg-7">
                                <p>KSPS BMT Anfa NU</p>
                            </div>
                        </div>


                    </div>
                </section><!-- End About Us Section -->
            </main>

            <ContactUsComponent />
            <FooterComponent />
        </body>

    </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/Header.vue'
import FooterComponent from '@/components/Footer.vue'
import TitlePageComponent from '@/components/TitlePage.vue'
import ContactUsComponent from '@/components/ContactUs.vue'

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
