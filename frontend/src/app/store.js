import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import assetReducer from '../features/assets/assetSlice'
import categoryReducer from '../features/categories/categorySlice'
import brandReducer from '../features/brands/brandSlice'
import siteReducer from '../features/sites/siteSlice'
import locationReducer from '../features/locations/locationSlice'
import departmentReducer from '../features/departments/departmentSlice'
import employeeReducer from '../features/employees/employeeSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        asset: assetReducer,
        category: categoryReducer,
        brand: brandReducer,
        site: siteReducer,
        department: departmentReducer,
        location: locationReducer,
        employee: employeeReducer
    },
})