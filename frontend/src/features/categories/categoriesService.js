import axios from 'axios'


const API_URL = '/api/assets/categories/'

const search = async (categoryData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL+'/search', categoryData, config)   
    return response.data

}

const get = async (categoryId, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL+ categoryId, config)   
    return response.data

}

const create = async (categoryData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, categoryData, config)

    return response.data
}

const update = async (categoryId, categoryData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(API_URL+ categoryId, categoryData, config)

    return response.data
}

const remove = async (categoryId, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }    
    const response = await axios.delete(API_URL + categoryId, config)

    return response.data
}
const categoriesService = {
    search,
    get,
    create,
    update,
    remove

}

export default categoriesService