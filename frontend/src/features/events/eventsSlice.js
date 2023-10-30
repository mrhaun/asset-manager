import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import eventsService from './eventsService'



const initialState = {
    events: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    updateComplete: false,    
    message: '',
}


export const getEvents = createAsyncThunk('event/getEvents', async (eventID, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token    
        return await eventsService.getEvents(eventID, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }
 
})

export const updateEvent = createAsyncThunk('event/updateEvent', async (eventData, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token
        return await eventsService.update(eventData.eventId, eventData.event, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})

export const deleteEvent = createAsyncThunk('event/deleteEvent', async (eventId, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token
        return await eventsService.remove(eventId, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})

export const eventsSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        reset: (state) => initialState, 
        
    },
    extraReducers: (builder) => {
        builder 
            .addCase(getEvents.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getEvents.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.events = action.payload
            })
            .addCase(getEvents.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(updateEvent.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateEvent.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
                state.updateComplete = true  
            })
            .addCase(updateEvent.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })            
            .addCase(deleteEvent.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteEvent.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(deleteEvent.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })            
        
    }

})

export const {reset} = eventsSlice.actions
export default eventsSlice.reducer