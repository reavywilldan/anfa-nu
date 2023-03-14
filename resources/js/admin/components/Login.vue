<template>
    <main class="main-content mt-0">
        <section>
            <div class="page-header min-vh-100">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                            <div class="card card-plain">
                                <div class="card-header pb-0 text-start">
                                    <h4 class="font-weight-bolder">Sign In</h4>
                                    <p class="mb-0">Enter your email and password to sign in</p>
                                </div>
                                <div class="card-body">
                                    <form role="form" action="javascript:void(0)" method="POST">
                                        <div class="col-12" v-if="Object.keys(validationErrors).length > 0">
                                            <div class="alert alert-danger">
                                                <ul class="mb-0">
                                                    <li v-for="(value, key) in validationErrors" :key="key">{{ value[0] }}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <input type="email" v-model="auth.email" name="email" id="email"
                                                class="form-control form-control-lg" placeholder="Email" aria-label="Email">
                                        </div>
                                        <div class="mb-3">
                                            <input type="password" v-model="auth.password" name="password" id="password"
                                                class="form-control form-control-lg" placeholder="Password"
                                                aria-label="Password">
                                        </div>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" id="rememberMe">
                                            <label class="form-check-label" for="rememberMe">Remember me</label>
                                        </div>
                                        <div class="text-center">
                                            <button type="submit" :disabled="processing" @click="login"
                                                class="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0">
                                                {{ processing ? "Please wait" : "Login" }}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div
                            class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
                            <div class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                                style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg');background-size: cover;">
                                <span class="mask bg-gradient-primary opacity-6"></span>
                                <h4 class="mt-5 text-white font-weight-bolder position-relative">
                                    "Attention is the new currency"
                                </h4>
                                <p class="text-white position-relative">
                                    The more effortless the writing looks, the more
                                    effort the writer actually put into the process.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import { mapActions } from 'vuex'
import axios from 'axios'

import authServices from '../../services/auth'

export default {
    name: 'LoginAdminComponent',
    data() {
        return {
            auth: {
                email: '',
                password: ''
            },
            validationErrors: {},
            processing: false
        }
    },
    methods: {
        ...mapActions({
            signIn: 'auth/login'
        }),
        async login() {
            this.processing = true

            await axios.get('/sanctum/csrf-cookie')
            let dataLogin = await authServices.login(this.auth)

            if (dataLogin.status && dataLogin.status == 200) {
                dataLogin = dataLogin.data

                this.signIn(dataLogin.access_token)
            }
        },
    }
}
</script>