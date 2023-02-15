<template>
  <div class="home">

    <body>
      <HeaderComponent />
      <HeroComponent />

      <main id="main">
        <section id="about" class="about">
          <div class="container">

            <div class="section-title">
              <h2>Tentang Kami</h2>
            </div>

            <div class="row content">
              <div class="col-lg-6 text-left">
                <h1>MENGANGKAT STATUS SOSIAL EKONOMI MASYARAKAT</h1>
              </div>
              <div class="col-lg-6 pt-4 pt-lg-0 text-left">
                <p>
                  menjadi lembaga keuangan yang mandiri dan konsisten terhadap ketentuan syariah, memberi manfaat dan
                  mampu
                  mengangkat status sosial ekonomi masyarakat menuju kesejahteraan yang diridhoi Allah Taala
                </p>
                <!-- <a href="#" class="btn-learn-more">Learn More</a> -->
              </div>
            </div>

            <section id="counts" class="counts">
              <div class="container">

                <div class="row">
                  <div
                    class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start">
                    <img src="/img/counts-img.svg" alt="" class="img-fluid">
                  </div>

                  <div class="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0">
                    <div class="content d-flex flex-column justify-content-center">
                      <div class="row">
                        <div class="col-md-6 d-md-flex align-items-md-stretch">
                          <div class="count-box">
                            <i class="icofont-simple-smile"></i>
                            <span data-toggle="counter-up">65</span>
                            <p><strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.
                            </p>
                          </div>
                        </div>

                        <div class="col-md-6 d-md-flex align-items-md-stretch">
                          <div class="count-box">
                            <i class="icofont-document-folder"></i>
                            <span data-toggle="counter-up">85</span>
                            <p><strong>Projects</strong> adipisci atque cum quia aspernatur totam laudantium et quia
                              dere tan</p>
                          </div>
                        </div>

                        <div class="col-md-6 d-md-flex align-items-md-stretch">
                          <div class="count-box">
                            <i class="icofont-clock-time"></i>
                            <span data-toggle="counter-up">12</span>
                            <p><strong>Years of experience</strong> aut commodi quaerat modi aliquam nam ducimus aut
                              voluptate non vel</p>
                          </div>
                        </div>

                        <div class="col-md-6 d-md-flex align-items-md-stretch">
                          <div class="count-box">
                            <i class="icofont-award"></i>
                            <span data-toggle="counter-up">15</span>
                            <p><strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad
                              der</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            <section id="services" class="services">
              <div class="container">

                <div class="section-title">
                  <h2>Produk</h2>
                </div>

                <div class="row">
                  <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div class="icon-box">
                      <div class="icon"><i class="bx bxl-dribbble"></i></div>
                      <h4 class="title"><a href="">Lorem Ipsum</a></h4>
                      <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
                      </p>
                    </div>
                  </div>

                  <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div class="icon-box">
                      <div class="icon"><i class="bx bx-file"></i></div>
                      <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
                      <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore</p>
                    </div>
                  </div>

                  <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div class="icon-box">
                      <div class="icon"><i class="bx bx-tachometer"></i></div>
                      <h4 class="title"><a href="">Magni Dolores</a></h4>
                      <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                      </p>
                    </div>
                  </div>

                  <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div class="icon-box">
                      <div class="icon"><i class="bx bx-world"></i></div>
                      <h4 class="title"><a href="">Nemo Enim</a></h4>
                      <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </section>

            <section id="testimonials" class="testimonials">
              <div class="container">

                <div class="section-title">
                  <h2>Promo</h2>
                  <p>Karena Kami selalu mencoba memahami Anda</p>
                </div>

                <carousel :autoplay="2000" :items-to-show="2" :wrap-around="true">
                  <slide v-for="slide in 3" :key="slide">
                    <div class="testimonial-wrap">
                      <div class="testimonial-item" style="background-image: url('/img/hero-img.png')">
                      </div>
                    </div>
                  </slide>
                  <template #addons>
                    <navigation />
                    <pagination />
                  </template>
                </carousel>

              </div>
            </section>

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
import HeroComponent from '@/customer/components/Hero.vue'
import ContactUsComponent from '@/customer/components/ContactUs.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    ContactUsComponent,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  }
}
</script>