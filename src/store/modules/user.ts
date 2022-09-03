import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

interface UserState {
    loading: boolean
    error: string | null
    token: string | null
}

const defaultState: UserState = {
    loading: false,
    error: null,
    token: null
}

export const signIn = createAsyncThunk('user/signIn', async (params: { email: string; password: string }) => {
    const { data } = await axios.post(`http://123.56.149.216:8080/auth/login`, {
        email: params.email,
        password: params.password
    })
    return data.token
})

const userSlice = createSlice({
    name: 'user',
    initialState: defaultState,
    reducers: {
        signOut: state => {
            state.token = null
            state.error = null
            state.loading = false
        }
    },
    extraReducers: {
        [signIn.pending.type]: state => {
            state.loading = true
        },
        [signIn.fulfilled.type]: (state, action) => {
            state.token = action.payload
            state.loading = false
            state.error = null
        },
        [signIn.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export const { signOut } = userSlice.actions

export default userSlice.reducer
