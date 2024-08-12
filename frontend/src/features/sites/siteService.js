import axios from 'axios'


const API_URL = '/api/assets/sites/'

const search = async (siteData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL+'/search', siteData, config)   
    return response.data

}

const get = async (siteId, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL+ siteId, config)   
    return response.data

}

const create = async (siteData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, siteData, config)

    return response.data
}

const update = async (siteId, siteData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(API_URL+ siteId, siteData, config)

    return response.data
}

const remove = async (siteId, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }    
    const response = await axios.delete(API_URL + siteId, config)

    return response.data
}
const siteService = {
    search,
    get,
    create,
    update,
    remove

}

export default siteService