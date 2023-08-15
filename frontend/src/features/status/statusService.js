import axios from 'axios'


const API_URL = '/api/assets/status/'

const search = async (statusData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL+'/search', statusData, config)   
    return response.data

}

const get = async (statusId, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL+ statusId, config)   
    return response.data

}

const create = async (statusData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, statusData, config)

    return response.data
}

const update = async (statusId, statusData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(API_URL+ statusId, statusData, config)

    return response.data
}

const remove = async (statusId, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }    
    const response = await axios.delete(API_URL + statusId, config)

    return response.data
}
const statusService = {
    search,
    get,
    create,
    update,
    remove

}

export default statusService