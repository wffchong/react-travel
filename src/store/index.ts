import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import languageReducer from './modules/language'
import recommendProductsReducer from './modules/recommendProducts'
import productDetailReducer from './modules/productDetail'
import productSearchReducer from './modules/productSearch'
import userReducer from './modules/user'

//配置数据的持久化效果
import { persistStore, persistReducer } from 'redux-persist'
//导入需要配置的数据源，可以选择，storage，cookie,session等
import storage from 'redux-persist/lib/storage'

//定义配置的信息
const persistConfig = {
    key: 'root',
    storage: storage,
    // 如果不想将部分state持久化，可以将其放入黑名单(blacklist)中.黑名单是设置
    // blacklist: ['']
    // 白名单 --> 和黑名单只需要使用一个就行
    whitelist: ['user']
}

const rootReducer = combineReducers({
    language: languageReducer,
    recommendProducts: recommendProductsReducer,
    productDetail: productDetailReducer,
    productSearch: productSearchReducer,
    user: userReducer
})

//创建持久化的配置persist的信息
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    // 解决控制台报错无法序列号
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
    devTools: true
})

//使用persistStore包裹一下
const persistor = persistStore(store)

export type RootStateType = ReturnType<typeof store.getState>

export { store, persistor }
