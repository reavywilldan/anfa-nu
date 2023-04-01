<template>
    <body class="g-sidenav-show bg-gray-100">
        <SideNavComponent />
        <main class="main-content position-relative border-radius-lg ">
            <div class="container-fluid py-4">
                <div class="row">
                    <div class="col-12">
                        <div class="card mb-4">
                            <div class="card-header pb-0">
                                <h6>Profil Password</h6>
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
                                                    Password
                                                </label>
                                                <input class="form-control" name="email" id="email" type="text"
                                                    v-model="password" required>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" class="btn btn-primary btn-sm ms-auto" @click="editPasswordUsers">
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
import { mapActions } from 'vuex'

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
            password: '',
            dataUsers: {},
            messageError: ''
        }
    },
    methods: {
        ...mapActions({
            signOut: 'auth/logout'
        }),
        logout() {
            this.signOut()
        },
        async editPasswordUsers() {
            this.dataUsers.id = this.user.id

            if (this.password) {
                const updateUsers = await usersServices.updateUsers({ password: this.password }, this.user.bearer)
                if (updateUsers.data) {
                    let self = this

                    Swal.fire({
                        title: 'Berhasil!',
                        text: 'Password Profil berhasil diubah.',
                        icon: 'success'

                    }).then(function () {
                        self.signOut()
                    })
                }
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
