import { combineReducers, configureStore } from '@reduxjs/toolkit'
import languageReducer from './modules/language'
import recommendProductsReducer from './modules/recommendProducts'
import productDetailReducer from './modules/productDetail'
import productSearchReducer from './modules/productSearch'

const rootReducer = combineReducers({
    language: languageReducer,
    recommendProducts: recommendProductsReducer,
    productDetail: productDetailReducer,
    productSearch: productSearchReducer
})

const store = configureStore({
    reducer: rootReducer,
    devTools: true
})

export type RootStateType = ReturnType<typeof store.getState>

export default store
