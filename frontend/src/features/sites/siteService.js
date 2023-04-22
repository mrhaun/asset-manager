import axios from 'axios'


const API_URL = '/api/assets/sites/'

const search = async (SiteData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL+'/search', SiteData, config)   
    return response.data

}

const get = async (SiteId, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL+ SiteId, config)   
    return response.data

}

const create = async (SiteData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, SiteData, config)

    return response.data
}

const update = async (SiteId, SiteData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(API_URL+ SiteId, SiteData, config)

    return response.data
}

const remove = async (SiteId, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }    
    const response = await axios.delete(API_URL + SiteId, config)

    return response.data
}
const SiteService = {
    search,
    get,
    create,
    update,
    remove

}

export default SiteService