import axios from 'axios'


const API_URL = '/api/assets/locations/'

const search = async (locationData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL+'/search', locationData, config)   
    return response.data

}

const get = async (locationId, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL+ locationId, config)   
    return response.data

}

const create = async (locationData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, locationData, config)

    return response.data
}

const update = async (locationId, locationData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(API_URL+ locationId, locationData, config)

    return response.data
}

const remove = async (locationId, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }    
    const response = await axios.delete(API_URL + locationId, config)

    return response.data
}
const locationService = {
    search,
    get,
    create,
    update,
    remove

}

export default locationService