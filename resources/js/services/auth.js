import axios from 'axios'

const authServices = {
    async login({ email, password }) {
        try {
            const config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `/api/login?email=${email}&password=${password}`
            };

            return await axios(config)
        } catch (error) {
            return error
        }
    },
    async logout() {

    },
    async getUser(token) {
        token = token || ''

        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: '/api/user',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        };

        const data = await axios(config)

        if (data.data) {
            if (data.status == 200) {
                return data.data
            }

            return {}
        }

    }
}

export default authServices