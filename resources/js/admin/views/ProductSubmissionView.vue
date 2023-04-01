<template>
    <body class="g-sidenav-show bg-gray-100">
        <SideNavComponent />
        <main class="main-content position-relative border-radius-lg ">
            <!-- Navbar -->
            <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl " id="navbarBlur"
                data-scroll="false">
                <div class="container-fluid py-1 px-3">
                    <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                        <div class="ms-md-auto pe-md-3 d-flex align-items-center">
                            <div class="input-group">
                                <span class="input-group-text text-body">
                                    <i class="fas fa-search" aria-hidden="true"></i></span>
                                <input type="text" class="form-control" placeholder="Type here..." v-model="search"
                                    @keyup="onKeyupLoadDataFromServer">
                            </div>
                        </div>
                        <div class="ms-md-auto pe-md-3 d-flex align-items-center">
                            <div class="input-group">
                                <span class="input-group-text text-body">
                                    <i class="fas fa-sliders-h" aria-hidden="true"></i></span>
                                <select class="form-select" v-model="typeProduct" @change="onChangeLoadDataFromServer">
                                    <option value="">-- Pilih Produk Pembiayaan --</option>
                                    <option value="1">Pembiayaan Modal Usaha</option>
                                    <option value="2">Pembiayaan Kendaraan Bermotor</option>
                                    <option value="3">Pembiayaan Rumah</option>
                                    <option value="4">Pembiayaan Multiguna</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <!-- End Navbar -->

            <div class=" container-fluid py-4">
                <div class="row">
                    <div class="col-12">
                        <div class="card mb-4">
                            <div class="card-header pb-0">
                                <h6>Pengajuan</h6>
                            </div>
                            <div class="card-body px-0 pt-0 pb-2">
                                <div class="table-responsive p-0">
                                    <table class="table align-items-center mb-0">
                                        <thead>
                                            <tr>
                                                <th
                                                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                    Nama
                                                </th>
                                                <th
                                                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                    Nomor KTP
                                                </th>
                                                <th
                                                    class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                    Nomor Telepon
                                                </th>
                                                <th
                                                    class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                    Produk Pemmbiayaan
                                                </th>
                                                <th
                                                    class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                    Status
                                                </th>
                                                <th
                                                    class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                    Tanggal
                                                </th>
                                                <th
                                                    class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                    Aksi
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="submission in submissions" :key="submission.id" :id="submission.id">
                                                <td class="align-middle text-center">
                                                    <span class="text-secondary text-xs font-weight-bold">
                                                        {{ submission.name }}
                                                    </span>
                                                </td>
                                                <td class="align-middle text-center">
                                                    <span class="text-secondary text-xs font-weight-bold">
                                                        {{ submission.identity_number }}
                                                    </span>
                                                </td>
                                                <td class="align-middle text-center">
                                                    <span class="text-secondary text-xs font-weight-bold">
                                                        {{ submission.phone_number }}
                                                    </span>
                                                </td>
                                                <td class="align-middle text-center">
                                                    <span class="text-secondary text-xs font-weight-bold">
                                                        {{ submission.product_name }}
                                                    </span>
                                                </td>
                                                <td class="align-middle text-center">
                                                    <span class="text-secondary text-xs font-weight-bold">
                                                        <span v-if="submission.submission_status == 'on_submit'"
                                                            class="badge bg-gradient-secondary">Diajukan</span>
                                                        <span v-if="submission.submission_status == 'on_review'"
                                                            class="badge bg-gradient-info">Di Review</span>
                                                        <span v-if="submission.submission_status == 'rejected'"
                                                            class="badge bg-gradient-danger">Ditolak</span>
                                                        <span v-if="submission.submission_status == 'approved'"
                                                            class="badge bg-gradient-success">Disetujui</span>
                                                    </span>
                                                </td>
                                                <td class="align-middle text-center">
                                                    <span class="text-secondary text-xs font-weight-bold">
                                                        {{ formatDate(submission.created_at) }}
                                                    </span>
                                                </td>
                                                <td v-if="submission.submission_status == 'on_submit'" class="align-middle">
                                                    <a v-bind:href="'/admstr/detail-product-submission/' + submission.id"
                                                        class="text-secondary font-weight-bold text-xs"
                                                        data-toggle="tooltip">
                                                        Detail
                                                    </a>
                                                    <a href="#" class="text-secondary font-weight-bold text-xs"
                                                        data-toggle="tooltip" :data-id="submission.id"
                                                        data-status='on_review' @click.prevent="onClickUpdate">
                                                        Survei
                                                    </a>
                                                    <a href="#" class="text-secondary font-weight-bold text-xs"
                                                        data-toggle="tooltip" :data-id="submission.id"
                                                        data-status='rejected' @click.prevent="onClickUpdate">
                                                        Tolak
                                                    </a>
                                                    <a href="#" class="text-secondary font-weight-bold text-xs"
                                                        data-toggle="tooltip" :data-id="submission.id"
                                                        @click.prevent="onClickDelete">
                                                        Hapus
                                                    </a>
                                                </td>

                                                <td v-if="submission.submission_status == 'on_review'" class="align-middle">
                                                    <a v-bind:href="'/admstr/detail-product-submission/' + submission.id"
                                                        class="text-secondary font-weight-bold text-xs"
                                                        data-toggle="tooltip" data-original-title="Edit user">
                                                        Detail
                                                    </a>
                                                    <a href="#" class="text-secondary font-weight-bold text-xs"
                                                        data-toggle="tooltip" :data-id="submission.id"
                                                        data-status='approved' @click.prevent="onClickUpdate">
                                                        Setujui
                                                    </a>
                                                </td>

                                                <td v-if="submission.submission_status == 'approved'" class="align-middle">
                                                    <a v-bind:href="'/admstr/detail-product-submission/' + submission.id"
                                                        class="text-secondary font-weight-bold text-xs"
                                                        data-toggle="tooltip" data-original-title="Edit user">
                                                        Detail
                                                    </a>
                                                </td>

                                                <td v-if="submission.submission_status == 'rejected'" class="align-middle">
                                                    <a v-bind:href="'/admstr/detail-product-submission/' + submission.id"
                                                        class="text-secondary font-weight-bold text-xs"
                                                        data-toggle="tooltip" data-original-title="Edit user">
                                                        Detail
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="text-center mt-5">
                                    <button @click="loadDataFromServer" v-if="!noResult" type="button"
                                        class="btn text-white bg-gradient-dark">
                                        Load More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </body>
</template>

<script>
// @ is an alias to /src
import SideNavComponent from '@/admin/components/SideNav.vue'
import store from '@/store'

import productSubmissionServices from '../../services/productSubmission'

import Swal from 'sweetalert2'

export default {
    name: 'ProductSubmission',
    components: {
        SideNavComponent
    },
    data() {
        return {
            authenticated: (store.state.auth.authenticated),
            user: store.state.auth.user,
            submissions: [],
            page: 1,
            search: '',
            typeProduct: '',
            status: 'on_submit',
            noResult: false,
            message: ""
        }
    },
    watch: {
        '$route.params': {
            handler(newValue) {
                this.status = newValue.status
            },
            immediate: true
        }
    },
    methods: {
        async loadDataFromServer() {
            try {
                const obj = {
                    page: this.page,
                    status: this.status,
                    search: this.search,
                    typeProduct: this.typeProduct
                }

                const result = await productSubmissionServices.getProductSubmission(obj)

                if (result.data.length) {
                    this.submissions.push(...result.data);
                    this.page++;
                } else {
                    this.noResult = true;
                    this.message = "No result found";
                }
            } catch (err) {
                this.noResult = true;
                this.message = "Error loading data";
            }
        },
        async onKeyupLoadDataFromServer() {
            try {
                const obj = {
                    page: 1,
                    status: this.status,
                    search: this.search,
                    typeProduct: this.typeProduct
                }

                const result = await productSubmissionServices.getProductSubmission(obj)

                if (result.data.length) {
                    this.submissions = result.data;
                }
            } catch (err) {
                this.noResult = true;
                this.message = "Error loading data";
            }
        },
        async onChangeLoadDataFromServer() {
            try {
                const obj = {
                    page: 1,
                    status: this.status,
                    search: this.search,
                    typeProduct: this.typeProduct
                }

                const result = await productSubmissionServices.getProductSubmission(obj)

                if (result.data.length) {
                    this.submissions = result.data;
                }
            } catch (err) {
                this.noResult = true;
                this.message = "Error loading data";
            }
        },
        async onClickDelete(e) {
            try {
                let self = this
                const id = e.target.getAttribute('data-id')

                Swal.fire({
                    title: 'Apakah anda yakin',
                    showCancelButton: true,
                    confirmButtonText: 'Yes'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire('Data berhasil dihapus!', '', 'success').then(async function () {
                            const deleteData = await productSubmissionServices.deleteProductSubmissionById(id, self.user.bearer)

                            if (deleteData.data) {
                                location.reload()
                            }
                        })
                    }
                })
            } catch (err) { }
        },
        async onClickUpdate(e) {
            try {
                let self = this
                const id = e.target.getAttribute('data-id')
                const status = e.target.getAttribute('data-status')

                Swal.fire({
                    title: 'Apakah anda yakin',
                    showCancelButton: true,
                    confirmButtonText: 'Yes'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire('Data berhasil diupdate!', '', 'success').then(async function () {
                            const obj = { id, status }
                            const updateData = await productSubmissionServices.updateProductSubmissionById(obj, self.user.bearer)

                            if (updateData.data) {
                                location.reload()
                            }
                        })
                    }
                })
            } catch (err) { }
        }
    },
    async mounted() {
        await this.loadDataFromServer()
    }
}
</script>
