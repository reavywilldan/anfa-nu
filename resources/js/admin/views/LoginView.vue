<template>
    <body class="">
        <LoginAdminComponent />
    </body>
</template>

<script>
// @ is an alias to /src
import LoginAdminComponent from '@/admin/components/Login.vue'
import store from '@/store'

export default {
    name: 'AdminLogin',
    components: {
        LoginAdminComponent
    },
    data() {
        return {
            authenticated: (store.state.auth.authenticated)
        }
    }
}
</script>