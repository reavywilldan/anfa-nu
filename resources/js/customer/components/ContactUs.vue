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

                        <div class="row">
                            <div class="col">
                                <p>Bersama KSPPS BMT ANFA NU berbekal syariah dan insyallah menuai barokah</p>
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

                <div class="col-lg-5 col-md-12">
                    <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                        <div class="form-group">
                            <input type="text" name="name" class="form-control" id="name" placeholder="Your Name"
                                data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div class="validate"></div>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" name="email" id="email" placeholder="Your Email"
                                data-rule="email" data-msg="Please enter a valid email" />
                            <div class="validate"></div>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject"
                                data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                            <div class="validate"></div>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" name="message" rows="5" data-rule="required"
                                data-msg="Please write something for us" placeholder="Message"></textarea>
                            <div class="validate"></div>
                        </div>
                        <div class="mb-3">
                            <div class="loading">Loading</div>
                            <div class="error-message"></div>
                            <div class="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div class="text-center"><button type="submit">Send Message</button></div>
                    </form>
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
    created() {
        this.contact = config.basicInfo
    }
}
</script>