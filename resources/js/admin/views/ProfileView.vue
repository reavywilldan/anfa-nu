<template>
    <body class="g-sidenav-show bg-gray-100">
        <SideNavComponent />
        <main class="main-content position-relative border-radius-lg ">
            <div class="container-fluid py-4">
                <div class="row">
                    <div class="col-12">
                        <div class="card mb-4">
                            <div class="card-header pb-0">
                                <h6>Profil</h6>
                            </div>
                            <div class="card-body">
                                <form role="form" action="javascript:void(0)" method="POST">
                                    <div v-if="messageError" class="alert alert-primary" role="alert">
                                        <strong style="color: white;">{{ messageError }}</strong>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="email" class="form-control-label text-left">
                                                    Email / Username
                                                </label>
                                                <input class="form-control" name="email" id="email" type="text"
                                                    v-model="dataUsers.email" required>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="name" class="form-control-label text-left">
                                                    Nama
                                                </label>
                                                <input class="form-control" name="name" id="name" type="text"
                                                    v-model="dataUsers.name" required>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="name" class="form-control-label text-left">
                                                    Phone
                                                </label>
                                                <input class="form-control" name="phone" id="phone" type="tel"
                                                    v-model="dataUsers.phone" required>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" class="btn btn-primary btn-sm ms-auto" @click="editUsers">
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
    name: 'AdminProfileView',
    components: {
        SideNavComponent
    },
    data() {
        return {
            authenticated: (store.state.auth.authenticated),
            user: store.state.auth.user,
            dataUsers: {},
            messageError: ''
        }
    },
    methods: {
        async editUsers() {
            this.dataUsers.id = this.user.id

            const updateUsers = await usersServices.updateUsers(this.dataUsers, this.user.bearer)
            if (updateUsers.data) {
                let self = this

                Swal.fire({
                    title: 'Berhasil!',
                    text: 'Profil berhasil diubah.',
                    icon: 'success'

                }).then(function () {
                    self.$router.push('/admstr/profile')
                })
            }
        },
        async getUsersById(id) {
            try {
                const result = await usersServices.getUsersById(id, this.user.bearer)
                this.dataUsers = result
            } catch (err) {
                this.dataUsers = {}
            }
        }
    },
    async mounted() {
        await this.getUsersById(this.user.id)
    }
}
</script>
