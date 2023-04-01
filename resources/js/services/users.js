import axios from 'axios'

const usersServices = {
    url: '/api/users',
    async getUsers(page = 1, token) {
        try {
            page = page || 1
            page = parseInt(page)

            const config = {
                method: 'get',
                url: `${this.url}?page=${page}`,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            };

            const data = await axios(config)

            if (data.data) {
                if (data.status == 200) {
                    return data.data
                }

                return {}
            }

            return {}
        } catch (error) {
            return error
        }
    },
    async getUsersById(id = 1, token) {
        try {
            id = id || 1
            id = parseInt(id)

            const config = {
                method: 'get',
                url: `${this.url}/${id}`,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            };

            const data = await axios(config)

            if (data.data) {
                if (data.status == 200) {
                    return data.data
                }

                return {}
            }

            return {}
        } catch (error) {
            return error
        }
    },
    async deleteUsersById(id = 1, token) {
        try {
            id = id || 1
            id = parseInt(id)

            const config = {
                method: 'delete',
                url: `${this.url}/${id}`,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            };

            const data = await axios(config)

            if (data.data) {
                if (data.status == 200) {
                    return data.data
                }

                return {}
            }

            return {}
        } catch (error) {
            return error
        }
    },
    async postUsers({ name, email, phone, password }, token) {
        name = name || ''
        name = String(name)

        email = email || ''
        email = String(email)

        phone = phone || ''
        phone = String(phone)

        password = password || ''
        password = String(password)

        const data = JSON.stringify({
            name,
            email,
            phone,
            password
        })

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${this.url}`,
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            data
        }

        const response = await axios(config)

        if (response.data) {
            if (response.status == 200) {
                return response.data
            }

            return {}
        }

        return {}
    },
    async updateUsers({ id, name, email, phone, password }, token) {
        id = id || 1
        id = parseInt(id)

        name = name || ''
        name = String(name)

        email = email || ''
        email = String(email)

        phone = phone || ''
        phone = String(phone)

        password = password || ''
        password = String(password)

        let data = {}

        if (name) {
            data.name = name
        }

        if (email) {
            data.email = email
        }

        if (phone) {
            data.phone = phone
        }

        if (password) {
            data.password = password
        }

        data = JSON.stringify(data)

        const config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `${this.url}/${id}`,
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            data
        }

        const response = await axios(config)

        if (response.data) {
            if (response.status == 200) {
                return response.data
            }

            return {}
        }

        return {}
    },
}

export default usersServices
