import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import './i18n'
import { Provider } from 'react-redux'
import store from './store'
import axios from 'axios'
axios.defaults.headers['x-icode'] = '887E07F53CDA6854'
axios.defaults.baseURL = 'http://123.56.149.216:8080'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
