import router from '../router'
import authServices from '../services/auth'

export default {
    namespaced: true,
    state: {
        authenticated: false,
        user: {}
    },
    getters: {
        authenticated(state) {
            return state.authenticated
        },
        user(state) {
            return state.user
        }
    },
    mutations: {
        SET_AUTHENTICATED(state, value) {
            state.authenticated = value
        },
        SET_USER(state, value) {
            state.user = value
        }
    },
    actions: {
        async login({ commit }, bearer) {
            const dataUser = await authServices.getUser(bearer) || {}

            if (Object.keys(dataUser).length > 0) {
                dataUser.bearer = bearer

                commit('SET_USER', dataUser)
                commit('SET_AUTHENTICATED', true)
                router.push({ name: 'Admin - Home' })
            } else {
                commit('SET_USER', {})
                commit('SET_AUTHENTICATED', false)
            }
        },
        logout({ commit }) {
            commit('SET_USER', {})
            commit('SET_AUTHENTICATED', false)
        }
    }
}