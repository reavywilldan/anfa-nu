<template>
    <div class="home">

        <body>
            <HeaderComponent />

            <main id="main">
                <section id="faq" class="faq">
                    <div class="container">
                        <TitlePageComponent msg="Profil Perusahan" />

                        <div class="row faq-item d-flex align-items-stretch">
                            <div class="col-lg-5">
                                <h4>Nama Lembaga</h4>
                            </div>
                            <div class="col-lg-7">
                                <p>
                                    KSPPS BMT ANFA NU
                                </p>
                            </div>
                        </div><!-- End F.A.Q Item-->

                        <div class="row faq-item d-flex align-items-stretch">
                            <div class="col-lg-5">
                                <h4>Alamat E-mail</h4>
                            </div>
                            <div class="col-lg-7">
                                <p>
                                    {{ config.email }}
                                </p>
                            </div>
                        </div><!-- End F.A.Q Item-->

                        <div class="row faq-item d-flex align-items-stretch">
                            <div class="col-lg-5">
                                <h4>Alamat</h4>
                            </div>
                            <div class="col-lg-7">
                                <p>
                                    {{ config.address.headquarters.address }}
                                </p>
                            </div>
                        </div><!-- End F.A.Q Item-->

                        <div class="row faq-item d-flex align-items-stretch">
                            <div class="col-lg-5">
                                <h4>Kegiatan usaha</h4>
                            </div>
                            <div class="col-lg-7">
                                <p>
                                    Bergerak dibidang Koperasi Simpan Pinjam dan Pembiayaan Syariah sesuai Anggaran
                                    Dasar
                                </p>
                            </div>
                        </div><!-- End F.A.Q Item-->

                        <div class="row faq-item d-flex align-items-stretch">
                            <div class="col-lg-5">
                                <h4>No Telp/Fax</h4>
                            </div>
                            <div class="col-lg-7">
                                <p>
                                    {{ config.phone }}
                                </p>
                            </div>
                        </div><!-- End F.A.Q Item-->

                        <div class="row faq-item d-flex align-items-stretch">
                            <div class="col-lg-5">
                                <h4>Segmen Usaha Pembiayaan</h4>
                            </div>
                            <div class="col-lg-7">
                                <p>
                                    Bisnis UKM/UMKM dan Jual Beli
                                </p>
                            </div>
                        </div><!-- End F.A.Q Item-->
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

import config from '../../config'

export default {
    name: 'HomeView',
    components: {
        HeaderComponent,
        FooterComponent,
        TitlePageComponent,
        ContactUsComponent
    },
    setup() {
        return {
            config: config.config
        }
    }
}
</script>
