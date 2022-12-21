import axios from 'axios'


const API_URL = '/api/assets/'

const search = async (assetData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, assetData, config)

    return response.data
}

const create = async (assetData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, assetData, config)

    return response.data
}
const update = async (assetData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }    
    const response = await axios.put(API_URL, assetData, config)

    return response.data
}
const remove = async (assetData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }    
    const response = await axios.delete(API_URL, assetData, config)

    return response.data
}

const assetService = {
    search,
    create,
    update,
    remove

}

export default assetService