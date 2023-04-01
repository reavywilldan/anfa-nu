import axios from 'axios'

const fileServices = {
    async postImage({ file, path }) {
        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `/api/upload-image?path=${path}`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            data: file
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

export default fileServices
