<template>
    <div class="home">

        <body>
            <HeaderComponent />

            <main id="main">
                <section id="contact" class="contact">
                    <div class="container">
                        <TitlePageComponent msg="Kalkulator Pembiayaan" />

                        <form action="javascript:void(0)" method="post" role="form" class="php-email-form">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <label for="nominal">Nominal Pembiayaan</label>
                                                    <input type="text" class="form-control" id="nominal"
                                                        placeholder="Nominal Pembiayaan" v-model="nominal" required
                                                        v-on:keyup="onkeyupNominal">
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="period">Periode Pembayaran</label>
                                                    <select class="form-control" id="period" v-model="period">
                                                        <option selected disabled>Periode Pembayaran</option>
                                                        <option v-for="item in 96" :value="item">{{ item }} bulan</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <button type="submit" @click="simulator">Hitung</button>

                                            <div class="card mt-3">
                                                <div class="card-body">
                                                    <table class="table">
                                                        <tbody>
                                                            <tr>
                                                                <td scope="row">Periode</td>
                                                                <td>{{ period }} bulan</td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">Angsuran /bulan</td>
                                                                <td>{{ currencyNumberFormat(installmentPerMonth) }}</td>
                                                            </tr>
                                                            <tr>
                                                                <td scope="row">Total Pengembalian</td>
                                                                <td>{{ currencyNumberFormat(totalReturn) }}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <h4>
                                                Simulasi Angsuran Pembiayaan Kendaraan Bermotor dan Multiguna Sakinah
                                            </h4>
                                            <hr>
                                            <p class="font-weight-bold">
                                                * Nilai yang keluar hanya merupakan simulasi,
                                                perhitungan sebenarnya sesuai kesepakatan antar anggota dan BMT di Kantor
                                                Cabang
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
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
import TitlePageComponent from '@/customer/components/TitlePage.vue'
import ContactUsComponent from '@/customer/components/ContactUs.vue'


export default {
    name: 'FinancingCalculatorView',
    components: {
        HeaderComponent,
        FooterComponent,
        TitlePageComponent,
        ContactUsComponent
    },
    data() {
        return {
            nominal: 0,
            period: 1,
            installmentPerMonth: 0,
            totalReturn: 0
        }
    },
    methods: {
        simulator() {
            const nominal = parseFloat(this.nominal.replace(/,/g, ''))
            const period = this.period
            const installmentInterest = 0.011

            let perMonth = nominal / period
            let interest = nominal * installmentInterest

            this.installmentPerMonth = perMonth + interest
            this.totalReturn = this.installmentPerMonth * period
        },
        onkeyupNominal() {
            const el = document.getElementById('nominal')
            if (el.value) {
                const format = parseInt(el.value.replace(/\D/g, ''), 10)
                el.value = format.toLocaleString()
            } else {
                el.value = 0
            }

            this.nominal = el.value
        }
    }
}
</script>
