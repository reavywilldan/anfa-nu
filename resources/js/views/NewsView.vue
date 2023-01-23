<template>
    <div class="home">

        <body>
            <HeaderComponent />

            <main id="main">
                <section id="about" class="about">
                    <div class="container">

                        <TitlePageComponent msg="Berita" />

                        <section id="more-services" class="more-services">
                            <div class="container">

                                <div class="row">
                                    <div class="col-md-6 d-flex align-items-stretch">
                                        <div class="card"
                                            style='background-image: url("assets/img/more-services-1.jpg");'>
                                            <div class="card-body">
                                                <h5 class="card-title"><a href="">Lobira Duno</a></h5>
                                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed
                                                    do eiusmod tempor ut labore et dolore magna aliqua.</p>
                                                <div class="read-more"><a href="#"><i class="icofont-arrow-right"></i>
                                                        Read More</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                                        <div class="card"
                                            style='background-image: url("assets/img/more-services-2.jpg");'>
                                            <div class="card-body">
                                                <h5 class="card-title"><a href="">Limere Radses</a></h5>
                                                <p class="card-text">Sed ut perspiciatis unde omnis iste natus error sit
                                                    voluptatem doloremque laudantium, totam rem.</p>
                                                <div class="read-more"><a href="#"><i class="icofont-arrow-right"></i>
                                                        Read More</a></div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-md-6 d-flex align-items-stretch mt-4">
                                        <div class="card"
                                            style='background-image: url("assets/img/more-services-3.jpg");'>
                                            <div class="card-body">
                                                <h5 class="card-title"><a href="">Nive Lodo</a></h5>
                                                <p class="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut
                                                    odit aut fugit, sed quia magni dolores.</p>
                                                <div class="read-more"><a href="#"><i class="icofont-arrow-right"></i>
                                                        Read More</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 d-flex align-items-stretch mt-4">
                                        <div class="card"
                                            style='background-image: url("assets/img/more-services-4.jpg");'>
                                            <div class="card-body">
                                                <h5 class="card-title"><a href="">Pale Treda</a></h5>
                                                <p class="card-text">Nostrum eum sed et autem dolorum perspiciatis.
                                                    Magni porro quisquam laudantium voluptatem.</p>
                                                <div class="read-more"><a href="#"><i class="icofont-arrow-right"></i>
                                                        Read More</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

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
import HeaderComponent from '@/components/Header.vue'
import FooterComponent from '@/components/Footer.vue'
import TitlePageComponent from '@/components/TitlePage.vue'
import ContactUsComponent from '@/components/ContactUs.vue'

export default {
    name: 'NewsView',
    components: {
        HeaderComponent,
        FooterComponent,
        TitlePageComponent,
        ContactUsComponent
    }
}
</script>
