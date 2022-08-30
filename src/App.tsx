import React from 'react'
import 'antd/dist/antd.min.css'
import styles from './App.module.css'
import { Row, Col } from 'antd'
import { Header, Footer, Carousel, SideMenu } from './components'

function App() {
    return (
        <div className={styles.App}>
            <Header />
            {/* content */}
            <div className={styles['page-content']}>
                <Row>
                    <Col span={8}>
                        <SideMenu />
                    </Col>
                    <Col span={16}>
                        <Carousel />
                    </Col>
                </Row>
            </div>
            <Footer />
        </div>
    )
}

export default App
