import axios from 'axios'

const newsCategoryServices = {
    async getNewsCategory(page = 1) {
        try {
            page = page || 1
            page = parseInt(page)

            const config = {
                method: 'get',
                url: `/api/news-category?page=${page}`,
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

            const config = {
                method: 'get',
                url: `/api/news-category/${id}`,
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
    async postNewsCategory({ name }, token) {
        name = name || ''
        name = String(name)

        const data = JSON.stringify({
            name
        })

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: '/api/news-category',
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
    },
    async updateNewsCategory({ id, name }, token) {
        id = id || 0
        id = Number(id)

        name = name || ''
        name = String(name)

        const data = JSON.stringify({
            name
        })

        const config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `/api/news-category/${id}`,
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