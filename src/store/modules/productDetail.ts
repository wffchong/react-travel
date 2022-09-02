import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

interface ProductDetailState {
    loading: boolean
    error: string | null
    data: any
}

const defaultState: ProductDetailState = {
    loading: true,
    error: null,
    data: null
}

export const getProductDetail = createAsyncThunk('productDetail/getProductDetail', async (touristRouteId: string) => {
    const { data } = await axios.get(`/api/touristRoutes/${touristRouteId}`)
    return data
})

const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState: defaultState,
    reducers: {},
    extraReducers: {
        [getProductDetail.pending.type]: state => {
            state.loading = true
        },
        [getProductDetail.fulfilled.type]: (state, action) => {
            state.loading = false
            state.data = action.payload
        },
        [getProductDetail.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export default productDetailSlice.reducer
