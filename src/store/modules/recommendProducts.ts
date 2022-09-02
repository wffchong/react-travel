import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

interface RecommendProductsState {
    productList: any[]
    loading: boolean
    error: string | null
}

const defaultState: RecommendProductsState = {
    productList: [],
    loading: true,
    error: null
}

export const getRecommendProducts = createAsyncThunk('recommendProducts/getRecommendProduct', async () => {
    const { data } = await axios.get(`/api/productCollections`)
    return data
})

const recommendProductsSlice = createSlice({
    name: 'recommendProducts',
    initialState: defaultState,
    reducers: {},
    extraReducers: {
        [getRecommendProducts.pending.type]: state => {
            state.loading = true
        },
        [getRecommendProducts.fulfilled.type]: (state, action) => {
            state.loading = false
            state.productList = action.payload
        },
        [getRecommendProducts.rejected.type]: (state, action: PayloadAction<null | string>) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export default recommendProductsSlice.reducer
