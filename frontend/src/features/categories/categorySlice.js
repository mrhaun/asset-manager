import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import categoryService from './categoryService'



const initialState = {
    categories: [],
    category: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    updateComplete: false,
    message: '',
}


export const createCategory = createAsyncThunk('categories/createCategory', async (categoryData, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token
        return await categoryService.create(categoryData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})

export const search = createAsyncThunk('categories/search', async (categoryData, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token    
        return await categoryService.search(categoryData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})
export const getCategory = createAsyncThunk('categories/getCategory', async (categoryId, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token      
        return await categoryService.get(categoryId, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})

export const updateCategory = createAsyncThunk('categories/updateCategory', async (categoryData, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token
        return await categoryService.update(categoryData.categoryId, categoryData.category, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})

export const deleteCategory = createAsyncThunk('categories/deleteCategory', async (categoryId, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token
        return await categoryService.remove(categoryId, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        reset: (state) => initialState,
        
    },
    extraReducers: (builder) => {
        builder 
            .addCase(createCategory.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createCategory.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true     
                state.updateComplete = true                             
            })
            .addCase(createCategory.rejected, (state, action) => {
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
                state.categories = action.payload
            })
            .addCase(search.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getCategory.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getCategory.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.category = action.payload
            })
            .addCase(getCategory.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })            
            .addCase(updateCategory.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateCategory.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
                state.updateComplete = true                
            })
            .addCase(updateCategory.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })            
            .addCase(deleteCategory.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteCategory.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(deleteCategory.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })            
        
    }

})

export const {reset} = categorySlice.actions
export default categorySlice.reducer