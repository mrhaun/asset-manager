import axios from 'axios'


const API_URL = '/api/assets/employees/'

const search = async (employeeData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL+'/search', employeeData, config)   
    return response.data

}

const get = async (employeeId, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL+ employeeId, config)   
    return response.data

}

const create = async (employeeData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, employeeData, config)

    return response.data
}

const update = async (employeeId, employeeData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(API_URL+ employeeId, employeeData, config)

    return response.data
}

const remove = async (employeeId, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }    
    const response = await axios.delete(API_URL + employeeId, config)

    return response.data
}
const employeeService = {
    search,
    get,
    create,
    update,
    remove

}

export default employeeService