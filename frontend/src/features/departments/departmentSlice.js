import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import departmentsService from './departmentsService'



const initialState = {
    departments: [],
    department: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    updateComplete: false,
    message: '',
}


export const createDepartment = createAsyncThunk('departments/createDepartment', async (departmentData, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token
        return await departmentsService.create(departmentData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})

export const search = createAsyncThunk('departments/search', async (departmentData, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token    
        return await departmentsService.search(departmentData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})
export const getDepartment = createAsyncThunk('departments/getDepartment', async (departmentId, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token      
        return await departmentsService.get(departmentId, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})

export const updateDepartment = createAsyncThunk('departments/updateDepartment', async (departmentData, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token
        return await departmentsService.update(departmentData.departmentId, departmentData.department, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})

export const deleteDepartment = createAsyncThunk('departments/deleteDepartment', async (departmentId, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token
        return await departmentsService.remove(departmentId, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})

export const departmentsSlice = createSlice({
    name: 'departments',
    initialState,
    reducers: {
        reset: (state) => initialState,
        
    },
    extraReducers: (builder) => {
        builder 
            .addCase(createDepartment.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createDepartment.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true     
                state.updateComplete = true                             
            })
            .addCase(createDepartment.rejected, (state, action) => {
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
                state.departments = action.payload
            })
            .addCase(search.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getDepartment.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getDepartment.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.Department = action.payload
            })
            .addCase(getDepartment.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })            
            .addCase(updateDepartment.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateDepartment.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
                state.updateComplete = true                
            })
            .addCase(updateDepartment.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })            
            .addCase(deleteDepartment.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteDepartment.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(deleteDepartment.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })            
        
    }

})

export const {reset} = departmentsSlice.actions
export default departmentsSlice.reducer