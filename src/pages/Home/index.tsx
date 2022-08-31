import { Row, Col, Typography } from 'antd'
import styles from './HomePage.module.css'
import { Carousel, SideMenu, ProductCollection, BusinessPartners, Header, Footer } from '../../components'
import { productList1, productList2, productList3 } from '../../mockups'
import sideImage from '../../assets/images/sider_2019_12-09.png'
import sideImage2 from '../../assets/images/sider_2019_02-04.png'
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png'
import { useTranslation } from 'react-i18next'

const HomePage: React.FC = () => {
    const { t } = useTranslation()
    return (
        <>
            <Header />
            {/* content */}
            <div className={styles['page-content']}>
                <Row style={{ marginTop: 20 }}>
                    <Col span={8}>
                        <SideMenu />
                    </Col>
                    <Col span={16}>
                        <Carousel />
                    </Col>
                </Row>
                <ProductCollection
                    title={
                        <Typography.Title level={3} type='warning'>
                            {t('home_page.hot_recommended')}
                        </Typography.Title>
                    }
                    sideImage={sideImage}
                    products={productList1}
                />
                <ProductCollection
                    title={
                        <Typography.Title level={3} type='danger'>
                            {t('home_page.new_arrival')}
                        </Typography.Title>
                    }
                    sideImage={sideImage2}
                    products={productList2}
                />
                <ProductCollection
                    title={
                        <Typography.Title level={3} type='success'>
                            {t('home_page.domestic_travel')}
                        </Typography.Title>
                    }
                    sideImage={sideImage3}
                    products={productList3}
                />
                <BusinessPartners />
            </div>
            <Footer />
        </>
    )
}

export default HomePage
