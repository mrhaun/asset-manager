import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import statusService from './statusService'



const initialState = {
    statuses: [],
    status: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    updateComplete: false,    
    message: '',
}


export const createStatus = createAsyncThunk('status/createStatus', async (statusData, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token
        return await statusService.create(statusData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})

export const search = createAsyncThunk('status/search', async (statusData, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token    
        return await statusService.search(statusData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }
 
})
export const getStatus = createAsyncThunk('status/getStatus', async (statusId, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token      
        return await statusService.get(statusId, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})

export const updateStatus = createAsyncThunk('status/updateStatus', async (statusData, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token
        return await statusService.update(statusData.statusId, statusData.status, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})

export const deleteStatus = createAsyncThunk('status/deleteStatus', async (statusId, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token
        return await statusService.remove(statusId, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})

export const statusSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        reset: (state) => initialState,
        
    },
    extraReducers: (builder) => {
        builder 
            .addCase(createStatus.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createStatus.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
                state.updateComplete = true  
            })
            .addCase(createStatus.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(search.pending, (state) => {
                state.isLoading = true
            })
            .addCase(search.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.status = action.payload
            })
            .addCase(search.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getStatus.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getStatus.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.status = action.payload
            })
            .addCase(getStatus.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })            
            .addCase(updateStatus.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateStatus.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
                state.updateComplete = true  
            })
            .addCase(updateStatus.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })            
            .addCase(deleteStatus.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteStatus.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(deleteStatus.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })            
        
    }

})

export const {reset} = statusSlice.actions
export default statusSlice.reducer