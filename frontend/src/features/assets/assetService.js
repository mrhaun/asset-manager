import axios from 'axios'


const API_URL = '/api/assets/'

const search = async (assetData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL+'/search', assetData, config)
    console.log(response.data)    
    return response.data 

}
const getAsset = async (assetId, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL + assetId, config)
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
const update = async (assetData, assetId, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }    
    const response = await axios.put(API_URL + assetId, assetData, config)

    return response.data
}
const updateStatus = async (eventData, assetId, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }    
    const response = await axios.put(API_URL+'/status/' + assetId, eventData, config)

    return response.data
}
const remove = async (assetId, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }    
    const response = await axios.delete(API_URL + assetId, config)

    return response.data
}


const assetService = {
    search,
    getAsset,
    create,
    update,
    updateStatus,
    remove

}

export default assetService