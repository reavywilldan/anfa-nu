<template>
    <section id="contact" class="contact">
        <div class="container">

            <div class="section-title">
                <h2>Kontak Kami</h2>
            </div>

            <div class="row">

                <div class="col-lg-4 col-md-6">
                    <div class="contact-about">
                        <div class="row">
                            <div class="col">
                                <img src="/img/logo-bmt-anfanu-typho.png" alt="" width="200" height="100">
                            </div>
                        </div>

                        <!-- <div class="social-links">
                            <a href="#" class="twitter"><i class="icofont-twitter"></i></a>
                            <a href="#" class="facebook"><i class="icofont-facebook"></i></a>
                            <a href="#" class="instagram"><i class="icofont-instagram"></i></a>
                            <a href="#" class="linkedin"><i class="icofont-linkedin"></i></a>
                        </div> -->
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 mt-4 mt-md-0">
                    <p>Bersama KSPPS BMT ANFA NU berbekal syariah dan insyallah menuai barokah</p>
                </div>

                <div class="col-lg-3 col-md-6 mt-4 mt-md-0">
                    <div class="info">
                        <div>
                            <i class="ri-map-pin-line"></i>
                            <p>{{ contact.address }}</p>
                        </div>

                        <div>
                            <i class="ri-mail-send-line"></i>
                            <p>{{ contact.email }}</p>
                        </div>

                        <div>
                            <i class="ri-phone-line"></i>
                            <p>{{ contact.phone }}</p>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </section>
</template>

<script>

import config from '../../../config'

export default {
    name: 'ContactUsComponent',
    data() {
        return {
            contact: []
        }
    },
    mounted() {
        this.contact = config.basicInfo
    }
}
</script>
