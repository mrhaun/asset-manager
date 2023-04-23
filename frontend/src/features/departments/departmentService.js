import axios from 'axios'


const API_URL = '/api/assets/departments/'

const search = async (departmentData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL+'/search', departmentData, config)   
    return response.data

}

const get = async (departmentId, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL+ departmentId, config)   
    return response.data

}

const create = async (departmentData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, departmentData, config)

    return response.data
}

const update = async (departmentId, departmentData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(API_URL+ departmentId, departmentData, config)

    return response.data
}

const remove = async (departmentId, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }    
    const response = await axios.delete(API_URL + departmentId, config)

    return response.data
}
const departmentService = {
    search,
    get,
    create,
    update,
    remove

}

export default departmentService