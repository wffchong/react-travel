import { combineReducers } from 'redux'
import { languageReducer } from './language'
import { recommendProducts } from './recommendProducts'

export const rootReducer = combineReducers({
    languageReducer,
    recommendProducts
})
