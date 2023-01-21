<template>
  <div class="home">

    <body>
      <HeaderComponent />
        <Carousel>
          <Slide v-for="slide in 10" :key="slide">
            <div class="carousel__item">{{ slide }}</div>
          </Slide>

          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      <HeroComponent />

      <main id="main">
        <section id="about" class="about">
          <div class="container">

            <div class="section-title">
              <h2>Tentang Kami</h2>
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

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: lightblue;
  color: white;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}
</style>
