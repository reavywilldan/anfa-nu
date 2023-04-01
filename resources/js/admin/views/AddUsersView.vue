<template>
    <body class="g-sidenav-show bg-gray-100">
        <SideNavComponent />
        <main class="main-content position-relative border-radius-lg ">
            <div class="container-fluid py-4">
                <div class="row">
                    <div class="col-12">
                        <div class="card mb-4">
                            <div class="card-header pb-0">
                                <h6>Tambah User</h6>
                            </div>
                            <div class="card-body">
                                <form role="form" action="javascript:void(0)" method="POST">
                                    <div v-if="messageError" class="alert alert-primary" role="alert">
                                        <strong style="color: white;">{{ messageError }}</strong>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="email" class="form-control-label text-left">
                                                    Email / Username
                                                </label>
                                                <input class="form-control" name="email" id="email" type="text"
                                                    v-model="emailUser" required>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="name" class="form-control-label text-left">
                                                    Nama
                                                </label>
                                                <input class="form-control" name="name" id="name" type="text"
                                                    v-model="nameUser" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="phone" class="form-control-label text-left">
                                                    Phone
                                                </label>
                                                <input class="form-control" name="phone" id="phone" type="tel"
                                                    v-model="phoneUser" required>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="password" class="form-control-label text-left">
                                                    Password
                                                </label>
                                                <input class="form-control" name="password" id="password" type="password"
                                                    v-model="passwordUser" required>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" class="btn btn-primary btn-sm ms-auto" @click="addUsers">
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

import usersServices from '../../services/users'

import Swal from 'sweetalert2'

export default {
    name: 'AdminAddNewsUsers',
    components: {
        SideNavComponent
    },
    data() {
        return {
            authenticated: (store.state.auth.authenticated),
            user: store.state.auth.user,
            emailUser: '',
            nameUser: '',
            phoneUser: '',
            passwordUser: '',
            messageError: ''
        }
    },
    methods: {
        async addUsers() {
            const obj = {
                name: this.nameUser,
                email: this.emailUser,
                phone: this.phoneUser,
                password: this.passwordUser
            }

            const postUser = await usersServices.postUsers(obj, this.user.bearer)
            if (postUser.data) {
                let self = this

                Swal.fire({
                    title: 'Berhasil!',
                    text: 'User berhasil ditambahkan.',
                    icon: 'success'

                }).then(function () {
                    self.$router.push('/admstr/users')
                })
            }
        }
    }
}
</script>
