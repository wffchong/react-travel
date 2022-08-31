import { LanguageActionTypes } from '../actions/language'
import { CHANGE_LANGUAGE } from '../constants/language'
import i18n from 'i18next'

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

export const languageReducer = (state = defaultState, action: LanguageActionTypes): LanguageState => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            i18n.changeLanguage(action.payload) // 这样处理不是标准的做法，产生了副作用
            return { ...state, language: action.payload }
        default:
            return state
    }
}
