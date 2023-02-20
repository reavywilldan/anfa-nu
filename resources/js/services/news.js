import axios from 'axios'

const newsServices = {
    async getNews(page = 1) {
        try {
            page = page || 1
            page = parseInt(page)

            const config = {
                method: 'get',
                url: `/api/news?page=${page}`,
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

export default newsServices