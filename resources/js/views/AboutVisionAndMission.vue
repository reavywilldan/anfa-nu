<template>
    <div class="home">

        <body>
            <HeaderComponent />

            <main id="main">
                <section id="faq" class="faq">
                    <div class="container">
                        <TitlePageComponent msg="Visi Dan Misi" />

                        <div class="row">
                            <div v-for="item in visionAndMission" class="col">
                                <h2>{{ item.title }}</h2>

                                <div v-if="item.type == 'paragraph'">
                                    <p>{{ item.value }}</p>
                                </div>

                                <div v-else-if="item.type == 'list'">
                                    <section id="about" class="about">
                                        <div class="row content">
                                            <div class="col">

                                                <ul v-show="item.value.length > 0">
                                                    <li v-for="MissionValue in item.value">
                                                        <i class="ri-check-double-line"></i>
                                                        {{ MissionValue }}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>
                                </div>
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
    data() {
        return {
            visionAndMission: []
        }
    },
    created() {
        this.visionAndMission = config.visionAndMission
    }
}
</script>
