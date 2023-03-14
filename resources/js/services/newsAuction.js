import axios from 'axios'

const newsAuctionServices = {
    async getNews(page = 1) {
        try {
            page = page || 1
            page = parseInt(page)

            const config = {
                method: 'get',
                url: `/api/news-auction?page=${page}`,
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

            const config = {
                method: 'get',
                url: `/api/news-auction/${id}`,
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
    }
}

export default newsAuctionServices