import { Row, Col, Typography, Spin } from 'antd'
import styles from './HomePage.module.css'
import { Carousel, SideMenu, ProductCollection, BusinessPartners } from '../../components'
import sideImage from '../../assets/images/sider_2019_12-09.png'
import sideImage2 from '../../assets/images/sider_2019_02-04.png'
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { getRecommendProducts } from '../../store/modules/recommendProducts'
import { useSelector } from '../../store/hooks/useSelector'
import { useEffect } from 'react'
import MainLayout from '../../layouts/MainLayout'

const HomePage: React.FC = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRecommendProducts())
    }, [dispatch])

    const { productList, loading, error } = useSelector(state => state.recommendProducts)

    if (loading) {
        return (
            <Spin
                size='large'
                style={{
                    marginTop: 200,
                    marginBottom: 200,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '100%'
                }}
            />
        )
    }

    if (error) {
        return <div>网站出错:{error}</div>
    }

    return (
        <MainLayout>
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
                    products={productList[0].touristRoutes}
                />
                <ProductCollection
                    title={
                        <Typography.Title level={3} type='danger'>
                            {t('home_page.new_arrival')}
                        </Typography.Title>
                    }
                    sideImage={sideImage2}
                    products={productList[1].touristRoutes}
                />
                <ProductCollection
                    title={
                        <Typography.Title level={3} type='danger'>
                            {t('home_page.new_arrival')}
                        </Typography.Title>
                    }
                    sideImage={sideImage3}
                    products={productList[2].touristRoutes}
                />

                <BusinessPartners />
            </div>
        </MainLayout>
    )
}

export default HomePage
