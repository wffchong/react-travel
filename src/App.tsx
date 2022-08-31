import React from 'react'
import 'antd/dist/antd.min.css'
import styles from './App.module.css'
import { HomePage, SignIn, Register, Detail } from './pages'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
function App() {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={HomePage} />
                    <Route exact path={'/signIn'} component={SignIn} />
                    <Route exact path={'/register'} component={Register} />
                    <Route exact path={'/detail/:touristRouteId'} component={Detail} />
                    <Route render={() => <h1>404 not found 页面去火星了 ！</h1>} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
