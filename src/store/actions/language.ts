import { CHANGE_LANGUAGE } from '../constants/language'

interface ChangeLanguageAction {
    type: typeof CHANGE_LANGUAGE
    payload: 'zh' | 'en'
}

export const changeLanguageAction = (languageCode: 'zh' | 'en'): ChangeLanguageAction => {
    return {
        type: CHANGE_LANGUAGE,
        payload: languageCode
    }
}

export type LanguageActionTypes = ChangeLanguageAction
