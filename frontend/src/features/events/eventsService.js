import axios from 'axios'


const API_URL = '/api/assets/events/'

const getEvents = async (eventId, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL+ eventId, config)   
    return response.data

}

const update = async (eventId, eventData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(API_URL+ eventId, eventData, config)

    return response.data
}

const remove = async (eventId, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }    
    const response = await axios.delete(API_URL + eventId, config)

    return response.data
}
const eventsService = {
    getEvents,
    update,
    remove

}

export default eventsService