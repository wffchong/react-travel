import React from 'react'
import 'antd/dist/antd.min.css'
import styles from './App.module.css'
import { HomePage, SignIn, Register, Detail } from './pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/signIn' element={<SignIn />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/detail/:touristRouteId' element={<Detail />} />
                    <Route path='*' element={<h1>404 not found 页面去火星了 ！</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
