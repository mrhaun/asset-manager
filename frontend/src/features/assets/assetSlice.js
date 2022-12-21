import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import assetService from './assetService'



const initialState = {
    assets: [],
    asset: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const create = createAsyncThunk('asset/create', async (assetData, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token
        return await assetService.create(assetData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})

export const search = createAsyncThunk('asset/search', async (assetData, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token
        return await assetService.search(assetData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})

export const assetSlice = createSlice({
    name: 'asset',
    initialState,
    reducers: {
        reset: (state) => initialState,
        
    },
    extraReducers: (builder) => {
        builder 
            .addCase(create.pending, (state) => {
                state.isLoading = true
            })
            .addCase(create.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(create.rejected, (state, action) => {
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
                state.assets = action.payload
            })
            .addCase(search.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })            

        
    }

})

export const {reset} = assetSlice.actions
export default assetSlice.reducer