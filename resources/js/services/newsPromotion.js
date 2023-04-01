import axios from 'axios'
import { isArray } from 'lodash'

const newsPromotionServices = {
    url: '/api/news-promotion',
    async getNews({ page = 1, search, limit }) {
        try {
            page = page || 1
            page = parseInt(page)

            search = search || ''
            search = String(search)

            let urlApi = `${this.url}?page=${page}`

            if (search) {
                urlApi += `&search=${search}`
            }

            if (limit) {
                urlApi += `&limit=${limit}`
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
    async getNewsById(id = 1) {
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
    async deleteNewsById(id = 1, token) {
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
    async postNews({ username, title, text, category, photo }, token) {
        username = username || ''
        username = String(username)

        title = title || ''
        title = title || ''

        text = text || ''
        text = String(text)

        category = category || []
        category = isArray(category) ? category : []

        photo = photo || []
        photo = isArray(photo) ? photo : []

        const data = JSON.stringify({
            username,
            title,
            text,
            category,
            photo
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
    }
}

export default newsPromotionServices
