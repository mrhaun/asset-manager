import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import locationService from './locationService'



const initialState = {
    locations: [],
    location: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    updateComplete: false,
    message: '',
}


export const createLocation = createAsyncThunk('locations/createLocation', async (locationData, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token
        return await locationService.create(locationData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})

export const search = createAsyncThunk('locations/search', async (locationData, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token    
        return await locationService.search(locationData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})
export const getLocation = createAsyncThunk('locations/getLocation', async (locationId, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token      
        return await locationService.get(locationId, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})

export const updateLocation = createAsyncThunk('locations/updateLocation', async (locationData, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token
        return await locationService.update(locationData.locationId, locationData.location, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})

export const deleteLocation = createAsyncThunk('locations/deleteLocation', async (locationId, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token
        return await locationService.remove(locationId, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        reset: (state) => initialState,
        
    },
    extraReducers: (builder) => {
        builder 
            .addCase(createLocation.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createLocation.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true     
                state.updateComplete = true                             
            })
            .addCase(createLocation.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(search.pending, (state) => {
                state.isLoading = true
            })
            .addCase(search.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.locations = action.payload
            })
            .addCase(search.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getLocation.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getLocation.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.location = action.payload
            })
            .addCase(getLocation.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })            
            .addCase(updateLocation.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateLocation.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
                state.updateComplete = true                
            })
            .addCase(updateLocation.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })            
            .addCase(deleteLocation.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteLocation.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(deleteLocation.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })            
        
    }

})

export const {reset} = locationSlice.actions
export default locationSlice.reducer