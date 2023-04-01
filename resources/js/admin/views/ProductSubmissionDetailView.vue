<template>
    <body class="g-sidenav-show bg-gray-100">
        <SideNavComponent />
        <main class="main-content position-relative border-radius-lg ">
            <div class="container-fluid py-4">
                <div class="row">
                    <div class="col-12">
                        <div class="card mb-4">
                            <div class="card-header pb-0">
                                <h6>Data Pemohon</h6>
                            </div>
                            <div class="card-body">
                                <form role="form" action="javascript:void(0)" method="POST">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="form-control-label text-left">
                                                    Nama Lengkap
                                                </label>
                                                <input class="form-control" type="text" :value="productSubmission.name"
                                                    disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="form-control-label text-left">
                                                    Jenis Kelamin
                                                </label>
                                                <input v-if="productSubmission.gender == 'male'" class="form-control"
                                                    type="text" value="Pria" disabled>
                                                <input v-if="productSubmission.gender == 'female'" class="form-control"
                                                    type="text" value="Wanita" disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="form-control-label text-left">
                                                    Kota Lahir
                                                </label>
                                                <input class="form-control" type="text"
                                                    :value="productSubmission.city_of_birth" disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="form-control-label text-left">
                                                    Tanggal Lahir
                                                </label>
                                                <input class="form-control" type="date"
                                                    :value="productSubmission.date_of_birth" disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="form-control-label text-left">
                                                    Status
                                                </label>
                                                <input v-if="productSubmission.status == 'single'" class="form-control"
                                                    type="text" value="Belum Menikah" disabled>
                                                <input v-if="productSubmission.status == 'married'" class="form-control"
                                                    type="text" value="Menikah" disabled>
                                                <input v-if="productSubmission.status == 'divorced'" class="form-control"
                                                    type="text" value="Janda / Duda" disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="form-control-label text-left">
                                                    Nama Gadis Ibu Kandung
                                                </label>
                                                <input class="form-control" type="text"
                                                    :value="productSubmission.mother_maiden_name" disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Tanggungan</label>
                                                <div class="input-group mb-2">
                                                    <input class="form-control" type="number"
                                                        :value="productSubmission.dependent" disabled>
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text">orang</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="form-control-label text-left">
                                                    Nomor KTP
                                                </label>
                                                <input class="form-control" type="text"
                                                    :value="productSubmission.identity_number" disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="form-control-label text-left">
                                                    Nomor Telepon
                                                </label>
                                                <input class="form-control" type="text"
                                                    :value="productSubmission.phone_number" disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="form-control-label text-left">
                                                    Alamat Rumah
                                                </label>
                                                <textarea class="form-control"
                                                    disabled>{{ productSubmission.home_address }}</textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Lama Tinggal</label>
                                                <div class="input-group mb-2">
                                                    <input class="form-control" type="number"
                                                        :value="productSubmission.length_of_stay" disabled>
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text">tahun</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="form-control-label text-left">
                                                    Rumah
                                                </label>
                                                <input v-if="productSubmission.home_type == 'family'" class="form-control"
                                                    type="text" value="Keluarga" disabled>
                                                <input v-if="productSubmission.home_type == 'others'" class="form-control"
                                                    type="text" value="Lainnya" disabled>
                                                <input v-if="productSubmission.home_type == 'privacy'" class="form-control"
                                                    type="text" value="Pribadi" disabled>
                                                <input v-if="productSubmission.home_type == 'rent'" class="form-control"
                                                    type="text" value="Sewa" disabled>
                                                <input v-if="productSubmission.home_type == 'service'" class="form-control"
                                                    type="text" value="Dinas" disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="form-control-label text-left">
                                                    Pekerjaan
                                                </label>
                                                <input class="form-control" type="text" :value="productSubmission.work"
                                                    disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="form-control-label text-left">
                                                    Jabatan
                                                </label>
                                                <input class="form-control" type="text"
                                                    :value="productSubmission.work_position" disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="form-control-label text-left">
                                                    Alamat Pekerjaan
                                                </label>
                                                <textarea class="form-control"
                                                    disabled>{{ productSubmission.work_address }}</textarea>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="card mb-4">
                            <div class="card-header pb-0">
                                <h6>Permohonan Pembiayaan</h6>
                            </div>
                            <div class="card-body">
                                <form role="form" action="javascript:void(0)" method="POST">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Jumlah Permohonan</label>
                                                <input class="form-control" type="text"
                                                    :value="currencyNumberFormat(productSubmission.requested_amount)"
                                                    disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Penggunaan</label>
                                                <input class="form-control" type="text"
                                                    :value="productSubmission.requested_amount_use" disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Jangka Waktu</label>
                                                <div class="input-group mb-2">
                                                    <input class="form-control" type="number"
                                                        :value="productSubmission.term_of_payment" disabled>
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text">bulan</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Bagi Hasil</label>
                                                <input class="form-control" type="text"
                                                    :value="productSubmission.profit_sharing" disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="form-control-label text-left">
                                                    Status Pengajuan
                                                </label>
                                                <input v-if="productSubmission.submission_type == 'enhancement'"
                                                    class="form-control" type="text" value="Peningkatan" disabled>
                                                <input v-if="productSubmission.submission_type == 'new'"
                                                    class="form-control" type="text" value="Baru" disabled>
                                                <input v-if="productSubmission.submission_type == 'take_over'"
                                                    class="form-control" type="text" value="Take Over" disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="form-control-label text-left">
                                                    Produk
                                                </label>
                                                <input class="form-control" type="text"
                                                    :value="productSubmission.product_name" disabled>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="card mb-4">
                            <div class="card-header pb-0">
                                <h6>Data Suami / Istri</h6>
                            </div>
                            <div class="card-body">
                                <form role="form" action="javascript:void(0)" method="POST">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Nama Suami / Istri</label>
                                                <input class="form-control" type="text"
                                                    :value="productSubmission.partner_name" disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Kota Lahir</label>
                                                <input class="form-control" type="text"
                                                    :value="productSubmission.partner_city_of_birth" disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Tanggal Lahir</label>
                                                <input class="form-control" type="date"
                                                    :value="productSubmission.partner_date_of_birth" disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Pekerjaan</label>
                                                <input class="form-control" type="text"
                                                    :value="productSubmission.partner_work" disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="form-control-label text-left">
                                                    Alamat Pekerjaan
                                                </label>
                                                <textarea class="form-control"
                                                    disabled>{{ productSubmission.partner_work_address }}</textarea>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="card mb-4">
                            <div class="card-header pb-0">
                                <h6>Data Penghasilan</h6>
                            </div>
                            <div class="card-body">
                                <form role="form" action="javascript:void(0)" method="POST">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Penghasilan Pemohon per Bulan</label>
                                                <input class="form-control" type="text"
                                                    :value="currencyNumberFormat(productSubmission.applicant_income)"
                                                    disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Biaya Hidup Pemohon per Bulan</label>
                                                <input class="form-control" type="text"
                                                    :value="currencyNumberFormat(productSubmission.applicant_cost_living)"
                                                    disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Penghasilan Suami / Istri per Bulan</label>
                                                <input class="form-control" type="text"
                                                    :value="currencyNumberFormat(productSubmission.partner_income)"
                                                    disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Angsuran Pinjaman Lain Pemohon per Bulan</label>
                                                <input class="form-control" type="text"
                                                    :value="currencyNumberFormat(productSubmission.applicant_other_loan_installment)"
                                                    disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Penghasilan Tambahan per Bulan</label>
                                                <input class="form-control" type="text"
                                                    :value="currencyNumberFormat(productSubmission.applicant_extra_income)"
                                                    disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Sisa Penghasilan per Bulan</label>
                                                <input class="form-control" type="text"
                                                    :value="currencyNumberFormat(productSubmission.applicant_residual_income)"
                                                    disabled>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="card mb-4">
                            <div class="card-header pb-0">
                                <h6>Simpanan di BMT Anfa NU</h6>
                            </div>
                            <div class="card-body">
                                <form role="form" action="javascript:void(0)" method="POST">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Jenis Simpanan</label>
                                                <input class="form-control" type="text"
                                                    :value="productSubmission.anfa_deposit_type" disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Atas Nama</label>
                                                <input class="form-control" type="text"
                                                    :value="productSubmission.anfa_on_behalf_of" disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Nomor Rekening</label>
                                                <input class="form-control" type="text"
                                                    :value="productSubmission.anfa_account_number" disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Saldo Saat Ini</label>
                                                <input class="form-control" type="text"
                                                    :value="currencyNumberFormat(productSubmission.anfa_current_balance)"
                                                    disabled>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="card mb-4">
                            <div class="card-header pb-0">
                                <h6>Simpanan di Bank Lain</h6>
                            </div>
                            <div class="card-body">
                                <form role="form" action="javascript:void(0)" method="POST">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Jenis Simpanan</label>
                                                <input class="form-control" type="text"
                                                    :value="productSubmission.other_deposit_type" disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Atas Nama</label>
                                                <input class="form-control" type="text"
                                                    :value="productSubmission.other_on_behalf_of" disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Nomor Rekening</label>
                                                <input class="form-control" type="text"
                                                    :value="productSubmission.other_account_number" disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Saldo Saat Ini</label>
                                                <input class="form-control" type="text"
                                                    :value="currencyNumberFormat(productSubmission.other_current_balance)"
                                                    disabled>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="card mb-4">
                            <div class="card-header pb-0">
                                <h6>Data Jaminan</h6>
                            </div>
                            <div class="card-body">
                                <form role="form" action="javascript:void(0)" method="POST">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="form-control-label text-left">
                                                    Jaminan
                                                </label>
                                                <input v-if="productSubmission.guarantee == 'bpkb'" class="form-control"
                                                    type="text" value="BPKB" disabled>
                                                <input v-if="productSubmission.guarantee == 'sertifikat'"
                                                    class="form-control" type="text" value="Sertifikat" disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="form-control-label text-left">
                                                    Nilai Jaminan
                                                </label>
                                                <input class="form-control" type="text"
                                                    :value="currencyNumberFormat(productSubmission.guarantee_value)"
                                                    disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="form-control-label text-left">
                                                    Nama Pemilik
                                                </label>
                                                <input class="form-control" type="text"
                                                    :value="productSubmission.guarantee_name_owner" disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="form-control-label text-left">
                                                    Foto KTP
                                                </label>
                                                <div id="gallery">
                                                    <div class="img-wrapper">
                                                        <img v-bind:src="'/img/' + productSubmission.identity_photo">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

                <!-- <button type="submit" class="btn btn-primary btn-sm ms-auto" @click="addNewsCategory">
                    Simpan
                </button> -->
            </div>
        </main>
    </body>
</template>

<script>
// @ is an alias to /src
import SideNavComponent from '@/admin/components/SideNav.vue'
import store from '@/store'

import productSubmissionServices from '../../services/productSubmission'

export default {
    name: 'ProductSubmissionDetail',
    components: {
        SideNavComponent
    },
    data() {
        return {
            authenticated: (store.state.auth.authenticated),
            user: store.state.auth.user,
            idProductSubmission: 0,
            productSubmission: {}
        }
    },
    watch: {
        '$route.params': {
            handler(newValue) {
                this.idProductSubmission = newValue.id
                this.loadDataFromServer(newValue.id)
            },
            immediate: true
        }
    },
    methods: {
        async loadDataFromServer(id) {
            try {
                const result = await productSubmissionServices.getProductSubmissionById(id)
                this.productSubmission = result
            } catch (err) {
                this.productSubmission = {}
            }
        },
        currencyNumberFormat(number) {
            number = number || 0
            number = Number(number)

            const currency = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(number)

            return currency
        }
    }
}
</script>

<style scoped>
.img-wrapper {
    position: relative;
    width: fit-content;
    display: flex;
    width: 600px;
    height: 400px;
    border-radius: 10px;
    background-color: #ebebeb;
    align-items: center;
    overflow: hidden;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
}

#gallery {
    display: flex;
    gap: 16px;
    margin-top: 16px;
}

#gallery img {
    width: 100%;
    margin: 0 auto;
}

#remove {
    position: absolute;
    top: 0;
    right: 0;
}
</style>
