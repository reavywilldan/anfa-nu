import axios from 'axios'

const newsCategoryServices = {
    url: '/api/news-category',
    async getNewsCategory({ page, search }) {
        try {
            page = page || 1
            page = parseInt(page)

            search = search || ''
            search = String(search)

            let urlApi = `${this.url}?page=${page}`

            if (search) {
                urlApi += `&search=${search}`
            }

            const config = {
                method: 'get',
                url: urlApi,
                headers: {}
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
    async getNewsCategoryAll() {
        try {
            let urlApi = `${this.url}-all`

            const config = {
                method: 'get',
                url: urlApi,
                headers: {}
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
    async getNewsCategoryById(id = 1) {
        try {
            id = id || 1
            id = parseInt(id)

            const urlApi = `${this.url}/${id}`

            const config = {
                method: 'get',
                url: urlApi,
                headers: {}
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
    async deleteNewsCategoryById(id = 1, token) {
        try {
            id = id || 1
            id = parseInt(id)

            const urlApi = `${this.url}/${id}`

            const config = {
                method: 'delete',
                url: urlApi,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
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
    async postNewsCategory({ name }, token) {
        name = name || ''
        name = String(name)

        const data = JSON.stringify({
            name
        })

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: this.url,
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
    async updateNewsCategory({ id = 1, name }, token) {
        id = id || 0
        id = Number(id)

        name = name || ''
        name = String(name)

        const urlApi = `${this.url}/${id}`

        const data = JSON.stringify({
            name
        })

        const config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: urlApi,
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            data
        };

        const response = await axios(config)

        if (response.data) {
            if (response.status == 200) {
                return response.data
            }

            return {}
        }

        return {}
    }
}

export default newsCategoryServices
