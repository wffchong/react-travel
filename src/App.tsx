import React from 'react'
import 'antd/dist/antd.min.css'
import styles from './App.module.css'
import { HomePage, SignInPage, RegisterPage, DetailPage, Search } from './pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/signIn' element={<SignInPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/detail/:touristRouteId' element={<DetailPage />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/search/:keyword' element={<Search />} />
                    <Route path='*' element={<h1>404 not found 页面去火星了 ！</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
