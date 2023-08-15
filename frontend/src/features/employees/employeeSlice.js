import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import employeeService from './employeeService'



const initialState = {
    employees: [],
    employee: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    updateComplete: false,    
    message: '',
}


export const createEmployee = createAsyncThunk('employee/createEmployee', async (employeeData, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token
        return await employeeService.create(employeeData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})

export const search = createAsyncThunk('employee/search', async (employeeData, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token    
        return await employeeService.search(employeeData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }
 
})
export const getEmployee = createAsyncThunk('employee/getEmployee', async (employeeId, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token      
        return await employeeService.get(employeeId, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})

export const updateEmployee = createAsyncThunk('employee/updateEmployee', async (employeeData, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token
        return await employeeService.update(employeeData.employeeId, employeeData.employee, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})

export const deleteEmployee = createAsyncThunk('employee/deleteEmployee', async (employeeId, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token
        return await employeeService.remove(employeeId, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})

export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        reset: (state) => initialState,
        
    },
    extraReducers: (builder) => {
        builder 
            .addCase(createEmployee.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createEmployee.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
                state.updateComplete = true  
            })
            .addCase(createEmployee.rejected, (state, action) => {
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
                state.employees = action.payload
            })
            .addCase(search.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getEmployee.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getEmployee.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.employee = action.payload
            })
            .addCase(getEmployee.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })            
            .addCase(updateEmployee.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateEmployee.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
                state.updateComplete = true  
            })
            .addCase(updateEmployee.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })            
            .addCase(deleteEmployee.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteEmployee.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(deleteEmployee.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })            
        
    }

})

export const {reset} = employeeSlice.actions
export default employeeSlice.reducer