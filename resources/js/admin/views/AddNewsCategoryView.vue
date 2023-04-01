<template>
    <body class="g-sidenav-show bg-gray-100">
        <SideNavComponent />
        <main class="main-content position-relative border-radius-lg ">
            <div class="container-fluid py-4">
                <div class="row">
                    <div class="col-12">
                        <div class="card mb-4">
                            <div class="card-header pb-0">
                                <h6>Tambah Kategori Berita</h6>
                            </div>
                            <div class="card-body">
                                <form role="form" action="javascript:void(0)" method="POST">
                                    <div v-if="messageError" class="alert alert-primary" role="alert">
                                        <strong style="color: white;">{{ messageError }}</strong>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="name" class="form-control-label text-left">
                                                    Nama Kategori
                                                </label>
                                                <input class="form-control" v-model="nameCategory" name="name" id="name"
                                                    type="text" required>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-sm ms-auto" @click="addNewsCategory">
                                        Simpan
                                    </button>
                                </form>

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
    name: 'AdminAddNewsCategory',
    components: {
        SideNavComponent
    },
    data() {
        return {
            authenticated: (store.state.auth.authenticated),
            user: store.state.auth.user,
            nameCategory: '',
            messageError: ''
        }
    },
    methods: {
        async addNewsCategory() {
            const postNewsCategory = await newsCategoryServices.postNewsCategory({ name: this.nameCategory }, this.user.bearer)
            if (postNewsCategory.name) {
                this.messageError = postNewsCategory.name[0]
            } else {
                let self = this

                Swal.fire({
                    title: 'Berhasil!',
                    text: 'Kategori berita berhasil ditambahkan.',
                    icon: 'success'

                }).then(function () {
                    self.$router.push('/admstr/category-news')
                })
            }
        }
    }
}
</script>
