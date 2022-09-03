import { Spin } from 'antd'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams, useLocation } from 'react-router-dom'
import { Header, Footer, ProductList } from '../../components'
import { FilterArea } from '../../components/Filter/FilterArea'
import { useSelector } from '../../store/hooks/useSelector'
import { searchProduct } from '../../store/modules/productSearch'

import styles from './SearchPage.module.css'

type MatchParams = {
    keyword: string
}

const SearchPage: React.FC = () => {
    const { keyword } = useParams<MatchParams>()

    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        if (keyword) {
            dispatch(searchProduct({ keyword, nextPage: 1, pageSize: 10 }))
        } else {
            dispatch(searchProduct({ nextPage: 1, pageSize: 10 }))
        }
    }, [dispatch, location, keyword])

    const { data: productList, error, loading, pagination } = useSelector(state => state.productSearch)

    const onPageChange = (nextPage, pageSize) => {
        dispatch(searchProduct({ nextPage, pageSize, keyword }))
    }

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
        <>
            <Header />
            <div className={styles['page-content']}>
                {/* 分类过滤器 */}
                <div className={styles['product-list-container']}>
                    <FilterArea />
                </div>
                {/* 产品列表  */}
                <div className={styles['product-list-container']}>
                    <ProductList data={productList} paging={pagination} onPageChange={onPageChange} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SearchPage
 