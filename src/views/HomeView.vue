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
                <a href="#" class="btn-learn-more">Learn More</a>
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
import HeroComponent from '@/components/Hero.vue'
import ContactUsComponent from '@/components/ContactUs.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    ContactUsComponent
  }
}
</script>
