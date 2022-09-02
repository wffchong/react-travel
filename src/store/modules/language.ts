import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface LanguageState {
    language: 'zh' | 'en'
    languageList: { name: string; code: string }[]
}

const defaultState: LanguageState = {
    language: 'zh',
    languageList: [
        { name: '中文', code: 'zh' },
        { name: 'English', code: 'en' }
    ]
}

const languageSlice = createSlice({
    name: 'language',
    initialState: defaultState,
    reducers: {
        changeLanguageAction: (state, action: PayloadAction<'zh' | 'en'>) => {
            state.language = action.payload
        }
    }
})

export const { changeLanguageAction } = languageSlice.actions

export default languageSlice.reducer
