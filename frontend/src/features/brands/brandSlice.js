import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import brandService from './brandService'



const initialState = {
    brands: [],
    brand: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}


export const createBrand = createAsyncThunk('brand/createBrand', async (brandData, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token
        return await brandService.create(brandData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})

export const search = createAsyncThunk('brand/search', async (brandData, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token    
        return await brandService.search(brandData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})
export const getBrand = createAsyncThunk('brand/getBrand', async (brandId, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token      
        return await brandService.get(brandId, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})

export const updateBrand = createAsyncThunk('brand/updateBrand', async (brandData, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token
        return await brandService.update(brandData.brandId, brandData.brand, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})

export const deleteBrand = createAsyncThunk('brand/deleteBrand', async (brandId, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token
        return await brandService.remove(brandId, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})

export const brandSlice = createSlice({
    name: 'brand',
    initialState,
    reducers: {
        reset: (state) => initialState,
        
    },
    extraReducers: (builder) => {
        builder 
            .addCase(createBrand.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createBrand.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(createBrand.rejected, (state, action) => {
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
                state.brands = action.payload
            })
            .addCase(search.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getBrand.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getBrand.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.brand = action.payload
            })
            .addCase(getBrand.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })            
            .addCase(updateBrand.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateBrand.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(updateBrand.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })            
            .addCase(deleteBrand.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteBrand.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(deleteBrand.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })            
        
    }

})

export const {reset} = brandSlice.actions
export default brandSlice.reducer