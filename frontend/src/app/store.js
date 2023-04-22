import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import assetReducer from '../features/assets/assetSlice'
import categoriesReducer from '../features/categories/categoriesSlice'
import brandReducer from '../features/brands/brandSlice'
import siteReducer from '../features/sites/siteSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        asset: assetReducer,
        categories: categoriesReducer,
        brand: brandReducer,
        site: siteReducer,
    },
})