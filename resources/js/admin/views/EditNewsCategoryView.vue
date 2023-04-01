<template>
    <body class="g-sidenav-show bg-gray-100">
        <SideNavComponent />
        <main class="main-content position-relative border-radius-lg ">
            <div class="container-fluid py-4">
                <div class="row">
                    <div class="col-12">
                        <div class="card mb-4">
                            <div class="card-header pb-0">
                                <h6>Edit Kategori Berita</h6>
                            </div>
                            <div class="card-body">
                                <form role="form" action="javascript:void(0)" method="PUT">
                                    <div v-if="messageError" class="alert alert-primary" role="alert">
                                        <strong style="color: white;">{{ messageError }}</strong>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="example-text-input" class="form-control-label text-left">
                                                    Nama Kategori
                                                </label>
                                                <input class="form-control" name="name" id="name" type="text"
                                                    v-model="dataNewsCategory.name" required>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-sm ms-auto" @click="editNewsCategory">
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
    name: 'AdminEditNewsCategory',
    components: {
        SideNavComponent
    },
    data() {
        return {
            authenticated: (store.state.auth.authenticated),
            user: store.state.auth.user,
            dataNewsCategory: {},
            idNewsCategory: 0,
            messageError: ''
        }
    },
    watch: {
        '$route.params': {
            handler(newValue) {
                this.idNewsCategory = newValue.id
                this.getNewsCategoryById(newValue.id)
            },
            immediate: true
        }
    },
    methods: {
        async editNewsCategory() {
            const updateNewsCategory = await newsCategoryServices.updateNewsCategory({ id: this.idNewsCategory, name: this.dataNewsCategory.name }, this.user.bearer)

            if (updateNewsCategory.data) {
                let self = this

                Swal.fire({
                    title: 'Berhasil!',
                    text: 'Kategori berita berhasil diubah.',
                    icon: 'success'

                }).then(function () {
                    self.$router.push('/admstr/category-news')
                })
            }
        },
        async getNewsCategoryById(id) {
            try {
                const result = await newsCategoryServices.getNewsCategoryById(id)
                this.dataNewsCategory = result
                this.nameCategory = this.dataNewsCategory.name || ''
            } catch (err) {
                this.dataNewsCategory = {}
            }
        }
    }
}
</script>
