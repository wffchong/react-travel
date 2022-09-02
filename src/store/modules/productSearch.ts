import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

interface ProductSearchState {
    loading: boolean
    error: string | null
    data: any
    pagination: any
    searchValue: string
}

const defaultState: ProductSearchState = {
    loading: true,
    error: null,
    data: null,
    pagination: null,
    searchValue: ''
}

export const searchProduct = createAsyncThunk(
    'productSearch/searchProduct',
    async (params: { keyword?: string; nextPage: number | string; pageSize: number | string }) => {
        let url = `http://123.56.149.216:8080/api/touristRoutes?pageNumber=${params.nextPage}&pageSize=${params.pageSize}`
        if (params.keyword) {
            url += `&keyword=${params.keyword}`
        }
        const response = await axios.get(url)
        return {
            data: response.data,
            pagination: JSON.parse(response.headers['x-pagination'])
        }
    }
)

const productSearchSlice = createSlice({
    name: 'productSearch',
    initialState: defaultState,
    reducers: {
        changeSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        }
    },
    extraReducers: {
        [searchProduct.pending.type]: state => {
            state.loading = true
        },
        [searchProduct.fulfilled.type]: (state, action) => {
            state.data = action.payload.data
            state.pagination = action.payload.pagination
            state.loading = false
            state.error = null
        },
        [searchProduct.rejected.type]: (state, action: PayloadAction<string | null>) => {
            //   const ddd = action.payload;
            state.loading = false
            state.error = action.payload
        }
    }
})

export const { changeSearchValue } = productSearchSlice.actions

export default productSearchSlice.reducer
