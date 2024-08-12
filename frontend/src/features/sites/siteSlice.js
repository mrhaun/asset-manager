import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import siteService from './siteService'



const initialState = {
    sites: [],
    site: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    updateComplete: false,    
    message: '',
}


export const createSite = createAsyncThunk('site/createSite', async (siteData, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token
        return await siteService.create(siteData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})

export const search = createAsyncThunk('site/search', async (siteData, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token    
        return await siteService.search(siteData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})
export const getSite = createAsyncThunk('site/getSite', async (siteId, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token      
        return await siteService.get(siteId, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})

export const updateSite = createAsyncThunk('site/updateSite', async (siteData, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token
        return await siteService.update(siteData.siteId, siteData.site, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})

export const deleteSite = createAsyncThunk('site/deleteSite', async (siteId, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token
        return await siteService.remove(siteId, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})

export const siteSlice = createSlice({
    name: 'site',
    initialState,
    reducers: {
        reset: (state) => initialState,
        
    },
    extraReducers: (builder) => {
        builder 
            .addCase(createSite.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createSite.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
                state.updateComplete = true                     
            })
            .addCase(createSite.rejected, (state, action) => {
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
                state.sites = action.payload
            })
            .addCase(search.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getSite.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getSite.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.site = action.payload
            })
            .addCase(getSite.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })            
            .addCase(updateSite.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateSite.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
                state.updateComplete = true                     
            })
            .addCase(updateSite.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })            
            .addCase(deleteSite.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteSite.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(deleteSite.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })            
        
    }

})

export const {reset} = siteSlice.actions
export default siteSlice.reducer