import axios from 'axios'

const productSubmissionServices = {
    url: '/api/product-submission',
    async getProductSubmission({ page = 1, status, search, typeProduct }) {
        try {
            page = page || 1
            page = parseInt(page)

            status = status || ''
            status = String(status)

            search = search || ''
            search = String(search)

            typeProduct = typeProduct || ''
            typeProduct = String(typeProduct)

            let urlApi = `${this.url}?page=${page}`

            if (status) {
                urlApi += `&status=${status}`
            }

            if (search) {
                urlApi += `&search=${search}`
            }

            if (typeProduct) {
                urlApi += `&typeProduct=${typeProduct}`
            }

            const config = {
                method: 'get',
                url: urlApi,
                headers: {}
            }

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
    async getProductSubmissionById(id = 1) {
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
    async deleteProductSubmissionById(id = 1, token) {
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
    async updateProductSubmissionById({ id, status }, token) {
        id = id || 1
        id = parseInt(id)

        status = status || ''
        status = String(status)

        const data = JSON.stringify({
            status
        })

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
    async postProductSubmission(
        {
            name,
            gender,
            cityOfBirth,
            dateOfBirth,
            maritalStatus,
            motherMaidenName,
            dependent,
            identityNumber,
            phoneNumber,
            address,
            lengthOfStay,
            homeType,
            work,
            workPosition,
            workAddress,
            requestedAmountUse,
            termOfPayment,
            profitSharing,
            submissionType,
            partnerName,
            partnerCityOfBirth,
            partnerDateOfBirth,
            partnerWork,
            partnerWorkAddress,
            income,
            costLiving,
            partnerIncome,
            otherLoanInstallment,
            extraIncome,
            residualIncome,
            anfaDepositType,
            anfaOnBehalfOf,
            anfaAccountNumber,
            anfaCurrentBalance,
            otherDepositType,
            otherOnBehalfOf,
            otherAccountNumber,
            otherCurrentBalance,
            guarantee,
            guaranteeValue,
            guaranteeNameOwner,
            identityPhoto,
            idProduct
        }
    ) {
        if (arguments[0]) {
            const data = JSON.stringify(arguments[0])

            const config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${this.url}`,
                headers: {
                    'Accept': 'application/json',
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
}

export default productSubmissionServices
