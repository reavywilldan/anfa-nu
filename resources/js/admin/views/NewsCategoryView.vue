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
                                <span class="input-group-text text-body"><i class="fas fa-search"
                                        aria-hidden="true"></i></span>
                                <input type="text" class="form-control" placeholder="Type here..." v-model="search"
                                    @keyup="onKeyupLoadDataFromServer">
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <!-- End Navbar -->

            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="row">
                            <div class="col-md-12 mb-lg-0 mb-4">
                                <div class="row">
                                    <div class="col-6 text-end">
                                        <a class="btn bg-gradient-dark mb-0" href="/admstr/add-category-news">
                                            <i class="fas fa-plus"></i>&nbsp;&nbsp;Tambah
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid py-4">
                <div class="row">
                    <div class="col-12">
                        <div class="card mb-4">
                            <div class="card-header pb-0">
                                <h6>Kategori Berita</h6>
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
                                                    Tanggal
                                                </th>
                                                <th
                                                    class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                    Aksi
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="newsCategoryData in newsCategory" :key="newsCategoryData.id"
                                                :id="newsCategoryData.id">
                                                <td class="align-middle text-center">
                                                    <span class="text-secondary text-xs font-weight-bold">
                                                        {{ newsCategoryData.name }}
                                                    </span>
                                                </td>
                                                <td class="align-middle text-center">
                                                    <span class="text-secondary text-xs font-weight-bold">
                                                        {{ formatDate(newsCategoryData.created_at) }}
                                                    </span>
                                                </td>
                                                <td class="align-middle">
                                                    <a v-bind:href="'/admstr/edit-category-news/' + newsCategoryData.id"
                                                        class="text-secondary font-weight-bold text-xs"
                                                        data-toggle="tooltip" data-original-title="Edit category">
                                                        Edit
                                                    </a>
                                                    <a href="#" class="text-secondary font-weight-bold text-xs"
                                                        data-toggle="tooltip" data-original-title="Delete category"
                                                        :data-id="newsCategoryData.id" @click.prevent="onClickDelete">
                                                        Hapus
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

import newsCategoryServices from '../../services/newsCategory'

import Swal from 'sweetalert2'

export default {
    name: 'AdminNewsCategory',
    components: {
        SideNavComponent
    },
    data() {
        return {
            authenticated: (store.state.auth.authenticated),
            user: store.state.auth.user,
            newsCategory: [],
            page: 1,
            search: '',
            noResult: false,
            message: ""
        }
    },
    methods: {
        async loadDataFromServer() {
            try {
                const obj = {
                    page: this.page,
                    search: this.search
                }

                const result = await newsCategoryServices.getNewsCategory(obj)

                if (result.data.length) {
                    this.newsCategory.push(...result.data);
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
                    search: this.search
                }

                const result = await newsCategoryServices.getNewsCategory(obj)

                if (result.data.length) {
                    this.newsCategory = result.data
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
                            const deleteData = await newsCategoryServices.deleteNewsCategoryById(id, self.user.bearer)

                            if (deleteData.data) {
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
