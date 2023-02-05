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
                                    Kendati menjadi sentra industri tembaga, Kondisi warga Dukuh Tumang stagnan selama
                                    beberapa dekade. Permodalan yang terhenti membuat pergerakan bisnis di dukuh itu
                                    seolah hanya berjalan ditempat. Lembaga perekonomian yang ada kala itu enggan
                                    percaya kepada pengrajin di dukuh Tumang. Mereka dianggap tak mampu menerima
                                    pembiayaan dari Bank. Itulah cikal bakal dar cita-cita pendirian BMT TUMANG.
                                </p>

                                <p>
                                    Minimnya kepercayaan bank kepada warga Tumang pada saat itu membuat mereka akhirnya
                                    menggantungkan modal pada rentenir. Hal itu pula yang juga membuat mereka pesimistis
                                    terhadap Lembaga pembiayaan apapun. Disatu sisi, tangan penolong satu-satunya yakni
                                    rentenir kian menjerat para pengrajin. Jangankan untung, pendapatan untuk balik
                                    modalpun ludes untuk menutup cicilan kepada rentenir. Tak ada satupun Lembaga
                                    keuangan yang berhasil menggaet warga untuk bergabung. Kalaupun mau bergabung,
                                    mereka hanya akan meminjam tanpa bersedia untuk mengambalikan dana yang dipinjam.
                                    Tidak berapa lama, koperasi satu demi satu tutup pintu. Mereka tak lagi melayani
                                    kebutuhan permodalan masyarakat Tumang.
                                </p>

                                <p>
                                    jeratan rentenir itulah, BMT TUMANG dilahirkan. Sosok piawai Adib bersama sejumlah
                                    tokoh masyarakat mendorong BMT TUMANG lahir hingga tumbuh dan berkembang hingga
                                    mempunyai beberapa kantor cabang. Kecintaan kepada Tumang menjadi landasan utama.
                                    Selanjutnya, juga didorong keinginan masyarakat yang juga mau berubah serta wujud
                                    dari pendampingan yang tak kenal putus.
                                </p>

                                <p>
                                    Maret 2020, Kantor cabang KSPPS BMT TUMANG telah mencapai 24 kantor cabang yang
                                    tersebar dibeberapa wilayah Provinsi, Jawa Tengah, Jawa Timur dan Daerah Istimewa
                                    Yogyakarta.
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
