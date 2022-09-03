import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import './i18n'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
//如果使用React,则使用 PersistGate 包裹根组建
import { PersistGate } from 'redux-persist/lib/integration/react'

import axios from 'axios'
axios.defaults.headers['x-icode'] = '887E07F53CDA6854'
axios.defaults.baseURL = 'http://123.56.149.216:8080'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <Provider store={store}>
        {/* // loading 和 persistor是2个必需属性 */}
        {/* // loading={null} || loading={<LoadingView />} LoadingView为React组件 */}
        {/* // 最好将loading={null}，写成loading={<LoadingView />} 报错，原因暂不明 */}
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
)
