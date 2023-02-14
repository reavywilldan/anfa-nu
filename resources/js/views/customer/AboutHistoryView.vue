<template>
    <div class="home">

        <body>
            <HeaderComponent />

            <main id="main">
                <section id="about" class="about">
                    <div class="container">

                        <TitlePageComponent msg="Sejarah" />

                        <div class="row content">
                            <div class="col-lg-6 text-left">
                                <h1>MENGANGKAT STATUS SOSIAL EKONOMI MASYARAKAT</h1>
                            </div>
                            <div class="col-lg-6 pt-4 pt-lg-0 text-left">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum
                                </p>
                            </div>
                        </div>

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
