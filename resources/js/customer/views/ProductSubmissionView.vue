<template>
    <div class="home">

        <body>
            <HeaderComponent />

            <main id="main">
                <section id="contact" class="contact">
                    <div class="container">
                        <TitlePageComponent msg="Pengajuan Permohonan" />

                        <form action="javascript:void(0)" method="post" role="form" class="php-email-form">
                            <div class="card">
                                <div class="card-body">
                                    <div class="card-title">
                                        <TitlePageComponent msg="Data Pemohon" />
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="name">Nama Lengkap</label>
                                            <input type="text" class="form-control" id="name" placeholder="Nama Lengkap"
                                                v-model="name" required>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <legend class="col-form-label">Jenis Kelamin</legend>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="gender" id="male"
                                                    value="male" v-model="gender" required>
                                                <label class="form-check-label" for="male">
                                                    Pria
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="gender" id="female"
                                                    value="female" v-model="gender" required>
                                                <label class="form-check-label" for="female">
                                                    Wanita
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-3">
                                            <label for="cob">Kota Lahir</label>
                                            <input type="text" class="form-control" id="cob" placeholder="Kota Lahir"
                                                v-model="cityOfBirth" required>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="dob">Tanggal Lahir</label>
                                            <input type="date" class="form-control" name="dob" id="dob"
                                                v-model="dateOfBirth" required>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <legend class="col-form-label">Status</legend>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="status" id="single"
                                                    value="single" v-model="maritalStatus" required>
                                                <label class="form-check-label" for="single">
                                                    Belum Menikah
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="status" id="married"
                                                    value="married" v-model="maritalStatus" required>
                                                <label class="form-check-label" for="married">
                                                    Menikah
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="status" id="divorced"
                                                    value="divorced" v-model="maritalStatus" required>
                                                <label class="form-check-label" for="divorced">
                                                    Janda / Duda
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="motherMaidenName">Nama Gadis Ibu Kandung</label>
                                            <input type="text" class="form-control" id="motherMaidenName"
                                                placeholder="Nama Gadis Ibu Kandung" v-model="motherMaidenName" required>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="dependent">Tanggungan</label>
                                            <div class="input-group mb-2">
                                                <input type="number" class="form-control" id="dependent" v-model="dependent"
                                                    required>
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">orang</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="identityNumber">Nomor KTP</label>
                                            <input type="text" class="form-control" id="identityNumber"
                                                placeholder="Nomor KTP" v-model="identityNumber" required>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="phoneNumber">Nomor Telepon</label>
                                            <input type="text" class="form-control" id="phoneNumber"
                                                placeholder="Nomor Telepon" v-model="phoneNumber" required>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-4">
                                            <label for="address">Alamat Rumah</label>
                                            <textarea class="form-control" id="address" rows="3" v-model="address"
                                                required></textarea>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="lengthOfStay">Lama Tinggal</label>
                                            <div class="input-group">
                                                <input type="number" class="form-control" id="lengthOfStay"
                                                    v-model="lengthOfStay" required>
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">tahun</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <legend class="col-form-label">Rumah</legend>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="homeType" id="privacy"
                                                    value="privacy" v-model="homeType" required>
                                                <label class="form-check-label" for="privacy">
                                                    Pribadi
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="homeType" id="family"
                                                    value="family" v-model="homeType" required>
                                                <label class="form-check-label" for="family">
                                                    Keluarga
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="homeType" id="rent"
                                                    value="rent" v-model="homeType" required>
                                                <label class="form-check-label" for="rent">
                                                    Sewa
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="homeType" id="service"
                                                    value="service" v-model="homeType" required>
                                                <label class="form-check-label" for="service">
                                                    Dinas
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="homeType" id="others"
                                                    value="others" v-model="homeType" required>
                                                <label class="form-check-label" for="others">
                                                    Lainnya
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-4">
                                            <label for="work">Pekerjaan</label>
                                            <input type="text" class="form-control" id="work" placeholder="Pekerjaan"
                                                v-model="work" required>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="workPosition">Jabatan</label>
                                            <input type="text" class="form-control" id="workPosition" placeholder="Jabatan"
                                                v-model="workPosition" required>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="workAddress">Alamat Pekerjaan</label>
                                            <textarea class="form-control" id="workAddress" rows="3" v-model="workAddress"
                                                required></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card mt-2">
                                <div class="card-body">
                                    <div class="card-title">
                                        <TitlePageComponent msg="Permohonan Pembiayaan" />
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="requestedAmount">Jumlah Permohonan</label>
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">Rp</div>
                                                </div>
                                                <input type="number" class="form-control" id="requestedAmount"
                                                    v-model="requestedAmount" required>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="requestedAmountUse">Penggunaan</label>
                                            <input type="text" class="form-control" id="requestedAmountUse"
                                                placeholder="Penggunaan" v-model="requestedAmountUse" required>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="termOfPayment">Jangka Waktu</label>
                                            <div class="input-group mb-2">
                                                <select class="form-control" id="termOfPayment" v-model="termOfPayment"
                                                    required>
                                                    <option selected disabled>Periode Pembayaran</option>
                                                    <option v-for="item in 96" :value="item">{{ item }} bulan</option>
                                                </select>
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">bulan</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="profitSharing">Bagi Hasil</label>
                                            <input type="text" class="form-control" id="profitSharing"
                                                placeholder="Bagi Hasil" v-model="profitSharing" required>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <legend class="col-form-label">Status Pengajuan</legend>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="submissionType" id="new"
                                                    value="new" v-model="submissionType" required>
                                                <label class="form-check-label" for="new">Baru</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="submissionType"
                                                    id="enhancement" value="enhancement" v-model="submissionType" required>
                                                <label class="form-check-label" for="enhancement">Peningkatan</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="submissionType"
                                                    id="take_over" value="take_over" v-model="submissionType" required>
                                                <label class="form-check-label" for="take_over">Take Over</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card mt-2">
                                <div class="card-body">
                                    <div class="card-title">
                                        <TitlePageComponent msg="Data Suami / Istri" />
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="partnerName">Nama Suami / Istri</label>
                                            <input type="text" class="form-control" id="partnerName"
                                                placeholder="Nama Suami / Istri" v-model="partnerName"
                                                :required="maritalStatus == 'married'">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="partnerCob">Kota Lahir</label>
                                            <input type="text" class="form-control" id="partnerCob" placeholder="Kota Lahir"
                                                v-model="partnerCityOfBirth" :required="maritalStatus == 'married'">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="partnerDob">Tanggal Lahir</label>
                                            <input type="date" class="form-control" name="partnerDob" id="partnerDob"
                                                v-model="partnerDateOfBirth" :required="maritalStatus == 'married'">
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="partnerWork">Pekerjaan</label>
                                            <input type="text" class="form-control" id="partnerWork" placeholder="Pekerjaan"
                                                v-model="partnerWork" :required="maritalStatus == 'married'">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="partnerWorkAddress">Alamat Pekerjaan</label>
                                            <textarea class="form-control" id="partnerWorkAddress" rows="3"
                                                v-model="partnerWorkAddress"
                                                :required="maritalStatus == 'married'"></textarea>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="card mt-2">
                                <div class="card-body">
                                    <div class="card-title">
                                        <TitlePageComponent msg="Data Penghasilan" />
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="applicantIncome">Penghasilan Pemohon per Bulan</label>
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">Rp</div>
                                                </div>
                                                <input type="number" class="form-control" id="applicantIncome"
                                                    v-model="income" required>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="applicantCostLiving">Biaya Hidup Pemohon per Bulan</label>
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">Rp</div>
                                                </div>
                                                <input type="number" class="form-control" id="applicantCostLiving"
                                                    v-model="costLiving" required>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="partnerIncome">Penghasilan Suami / Istri per Bulan</label>
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">Rp</div>
                                                </div>
                                                <input type="number" class="form-control" id="partnerIncome"
                                                    v-model="partnerIncome" :required="maritalStatus == 'married'">
                                            </div>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="applicantOtherLoanInstallment">Angsuran Pinjaman Lain Pemohon per
                                                Bulan</label>
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">Rp</div>
                                                </div>
                                                <input type="number" class="form-control" id="applicantOtherLoanInstallment"
                                                    v-model="otherLoanInstallment" required>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="applicantExtraIncome">Penghasilan Tambahan per Bulan</label>
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">Rp</div>
                                                </div>
                                                <input type="number" class="form-control" id="applicantExtraIncome"
                                                    v-model="extraIncome" required>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="applicantResidualIncome">Sisa Penghasilan per Bulan</label>
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">Rp</div>
                                                </div>
                                                <input type="number" class="form-control" id="applicantResidualIncome"
                                                    v-model="residualIncome" required>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card mt-2">
                                <div class="card-body">
                                    <div class="card-title">
                                        <TitlePageComponent msg="Simpanan di BMT ANFA NU" />
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="anfaDepositType">Jenis Simpanan</label>
                                            <input type="text" class="form-control" id="anfaDepositType"
                                                placeholder="Jenis Simpanan" v-model="anfaDepositType">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="anfaOnBehalfOf">Atas Nama</label>
                                            <input type="text" class="form-control" id="anfaOnBehalfOf"
                                                placeholder="Atas Nama" v-model="anfaOnBehalfOf">
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="anfaAccountNumber">Nomor Rekening</label>
                                            <input type="text" class="form-control" id="anfaAccountNumber"
                                                placeholder="Nomor Rekening" v-model="anfaAccountNumber">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="anfaCurrentBalance">Saldo Saat Ini</label>
                                            <input type="number" class="form-control" id="anfaCurrentBalance"
                                                placeholder="Saldo Saat Ini" v-model="anfaCurrentBalance">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card mt-2">
                                <div class="card-body">
                                    <div class="card-title">
                                        <TitlePageComponent msg="Simpanan di Bank Lain" />
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="otherDepositType">Jenis Simpanan</label>
                                            <input type="text" class="form-control" id="otherDepositType"
                                                placeholder="Jenis Simpanan" v-model="otherDepositType">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="otherOnBehalfOf">Atas Nama</label>
                                            <input type="text" class="form-control" id="otherOnBehalfOf"
                                                placeholder="Atas Nama" v-model="otherOnBehalfOf">
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="otherAccountNumber">Nomor Rekening</label>
                                            <input type="text" class="form-control" id="otherAccountNumber"
                                                placeholder="Nomor Rekening" v-model="otherAccountNumber">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="otherCurrentBalance">Saldo Saat Ini</label>
                                            <input type="number" class="form-control" id="otherCurrentBalance"
                                                placeholder="Saldo Saat Ini" v-model="otherCurrentBalance">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card mt-2">
                                <div class="card-body">
                                    <div class="card-title">
                                        <TitlePageComponent msg="Data Jaminan" />
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <legend class="col-form-label">Jaminan</legend>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="guarantee" id="bpkb"
                                                    value="bpkb" v-model="guarantee" required>
                                                <label class="form-check-label" for="bpkb">
                                                    BPKB
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="guarantee"
                                                    id="sertifikat" value="sertifikat" v-model="guarantee" required>
                                                <label class="form-check-label" for="sertifikat">
                                                    Sertifikat
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="guaranteeValue">Nilai Jaminan</label>
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">Rp</div>
                                                </div>
                                                <input type="number" class="form-control" id="guaranteeValue"
                                                    v-model="guaranteeValue" required>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="guaranteeNameOwner">Nama Pemilik</label>
                                            <input type="text" class="form-control" id="guaranteeNameOwner"
                                                placeholder="Nama Pemilik" v-model="guaranteeNameOwner" required>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col">
                                            <label for="identityPhoto">Foto KTP</label>
                                            <input type="file" class="form-control" id="identityPhoto"
                                                accept="image/png, image/jpeg" @change="onFileChange" required>
                                        </div>
                                    </div>

                                    <div id="gallery" v-if="Object.keys(identityPhotoObj).length > 0">
                                        <div :data-file="identityPhotoObj.name" :data-temp="identityPhotoObj.tempPath"
                                            class="img-wrapper">
                                            <img :src="identityPhotoObj.tempPath">
                                            <a id="remove" :data-file="identityPhotoObj.name"
                                                :data-temp="identityPhotoObj.tempPath" @click="onClickRemoveFile">
                                                <i :data-file="identityPhotoObj.name" :data-temp="identityPhotoObj.tempPath"
                                                    class="ri-close-circle-fill">
                                                </i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="text-center mt-5"><button type="submit" @click="addSubmission">Ajukan</button></div>
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

import productSubmissionServices from '../../services/productSubmission'
import fileServices from '../../services/file'

import Swal from 'sweetalert2'

export default {
    name: 'ProductSubmissionView',
    components: {
        HeaderComponent,
        FooterComponent,
        TitlePageComponent,
        ContactUsComponent
    },
    data() {
        return {
            idProduct: 0,
            name: '',
            gender: '',
            cityOfBirth: '',
            dateOfBirth: '',
            maritalStatus: '',
            motherMaidenName: '',
            dependent: 0,
            identityNumber: '0',
            phoneNumber: '0',
            address: '',
            lengthOfStay: 0,
            homeType: '',
            work: '',
            workPosition: '',
            workAddress: '',
            requestedAmount: 0,
            requestedAmountUse: '',
            termOfPayment: 1,
            profitSharing: '',
            submissionType: '',
            partnerName: '',
            partnerCityOfBirth: '',
            partnerDateOfBirth: '',
            partnerWork: '',
            partnerWorkAddress: '',
            income: 0,
            costLiving: 0,
            partnerIncome: 0,
            otherLoanInstallment: 0,
            extraIncome: 0,
            residualIncome: 0,
            anfaDepositType: '',
            anfaOnBehalfOf: '',
            anfaAccountNumber: '',
            anfaCurrentBalance: 0,
            otherDepositType: '',
            otherOnBehalfOf: '',
            otherAccountNumber: '',
            otherCurrentBalance: 0,
            guarantee: '',
            guaranteeValue: 0,
            guaranteeNameOwner: '',
            identityPhotoObj: {},
            identityPhoto: ''
        }
    },
    watch: {
        '$route.params': {
            handler(newValue) {
                this.idProduct = newValue.id
            },
            immediate: true
        }
    },
    methods: {
        async addSubmission() {
            if (Object.keys(this.identityPhotoObj).length > 0) {
                const file = this.identityPhotoObj.file
                const path = 'submission'

                const formData = new FormData()
                formData.append('photo', file)

                const obj = {
                    file: formData,
                    path
                }

                const response = await fileServices.postImage(obj)
                formData.delete('photo')

                const pathResponse = response.data

                this.identityPhoto = pathResponse
            }

            const postProductSubmission = await productSubmissionServices.postProductSubmission(this.$data)
            console.log(postProductSubmission)

            if (postProductSubmission.data) {
                let self = this

                Swal.fire({
                    title: 'Berhasil!',
                    text: 'Berhasil mengajukan pembiayaan.',
                    icon: 'success'

                }).then(function () {
                    self.$router.push('/')
                })
            }
        },
        onFileChange(e) {
            const file = e.target.files[0]
            const name = file.name
            const tempPath = URL.createObjectURL(file)

            const obj = {
                file,
                name,
                tempPath
            }

            this.identityPhotoObj = obj
        },
        onClickRemoveFile(e) {
            e.preventDefault()

            this.identityPhotoObj = {}

            document.getElementById('identityPhoto').value = ''
            e.target.parentElement.remove()
        },
    }
}
</script>

<style scoped>
.img-wrapper {
    position: relative;
    width: fit-content;
    display: flex;
    width: 85px;
    height: 85px;
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
