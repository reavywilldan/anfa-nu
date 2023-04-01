import axios from 'axios'

const customerListServices = {
    url: '/api/customer-list',
    async getCustomerList({ page, search }, token) {
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
    }
}

export default customerListServices
