import axios from 'axios'


const API_URL = '/api/assets/brands/'

const search = async (brandData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL+'/search', brandData, config)   
    return response.data

}

const get = async (brandId, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL+ brandId, config)   
    return response.data

}

const create = async (brandData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, brandData, config)

    return response.data
}

const update = async (brandId, brandData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(API_URL+ brandId, brandData, config)

    return response.data
}

const remove = async (brandId, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }    
    const response = await axios.delete(API_URL + brandId, config)

    return response.data
}
const brandService = {
    search,
    get,
    create,
    update,
    remove

}

export default brandService