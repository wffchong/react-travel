import logo from '../../assets/logo.svg'
import { Typography, Dropdown, Menu, Button, Layout, Input } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'
import styles from './header.module.css'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useSelector } from '../../store/hooks/useSelector'
import { changeLanguageAction } from '../../store/modules/language'
import { changeSearchValue } from '../../store/modules/productSearch'
import jwt_decode, { JwtPayload as DefaultJwtPayload } from 'jwt-decode'
import { useEffect, useState } from 'react'
import { signOut } from '../../store/modules/user'

interface JwtPayload extends DefaultJwtPayload {
    username: string
}

const Header: React.FC = () => {
    const navigate = useNavigate()
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const { languageList } = useSelector(state => state.language)
    const { searchValue } = useSelector(state => state.productSearch)
    const token = useSelector(state => state.user.token)

    const [username, setUsername] = useState('')

    const changeLanguage = e => {
        dispatch(changeLanguageAction(e.key))
    }

    const handleSearch = (value: string) => {
        navigate(`/search/${value}`)
    }

    useEffect(() => {
        if (token) {
            const t = jwt_decode<JwtPayload>(token)
            setUsername(t.username)
        }
    }, [token])

    const onLogout = () => {
        dispatch(signOut())
    }

    return (
        <div className={styles['app-header']}>
            {/* top-header */}
            <div className={styles['top-header']}>
                <div className={styles.inner}>
                    <Typography.Text>{t('header.slogan')}</Typography.Text>
                    <Dropdown.Button
                        style={{ marginLeft: 15 }}
                        icon={<GlobalOutlined />}
                        overlay={
                            <Menu
                                onClick={e => changeLanguage(e)}
                                items={[
                                    ...languageList.map(l => {
                                        return { key: l.code, label: l.name }
                                    }),
                                    { key: 'new', label: t('header.add_new_language') }
                                ]}
                            />
                        }
                    >
                        语言
                    </Dropdown.Button>
                    {token ? (
                        <Button.Group className={styles['button-group']}>
                            <span>
                                {t('header.welcome')}
                                <Typography.Text strong>{username}</Typography.Text>
                            </span>
                            <Button>{t('header.shoppingCart')}</Button>
                            <Button onClick={onLogout}>{t('header.signOut')}</Button>
                        </Button.Group>
                    ) : (
                        <Button.Group className={styles['button-group']}>
                            <Button onClick={() => navigate('/register')}>{t('header.register')}</Button>
                            <Button onClick={() => navigate('/signIn')}>{t('header.signin')}</Button>
                        </Button.Group>
                    )}
                </div>
            </div>
            <Layout.Header className={styles['main-header']}>
                <span onClick={() => navigate('/')}>
                    <img src={logo} alt='logo' className={styles['App-logo']} />
                    <Typography.Title level={3} className={styles.title}>
                        React旅游网
                    </Typography.Title>
                </span>
                <Input.Search
                    placeholder='请输入旅游目的地、主题、或关键字'
                    className={styles['search-input']}
                    onSearch={handleSearch}
                    value={searchValue}
                    onChange={e => dispatch(changeSearchValue(e.target.value))}
                />
            </Layout.Header>
            <Menu
                mode='horizontal'
                className={styles['main-menu']}
                items={[
                    { key: '1', label: t('header.home_page') },
                    { key: '2', label: t('header.weekend') },
                    { key: '3', label: t('header.group') },
                    { key: '4', label: t('header.backpack') },
                    { key: '5', label: t('header.private') },
                    { key: '6', label: t('header.cruise') },
                    { key: '7', label: t('header.hotel') },
                    { key: '8', label: t('header.local') },
                    { key: '9', label: t('header.theme') },
                    { key: '10', label: t('header.custom') },
                    { key: '11', label: t('header.study') },
                    { key: '12', label: t('header.visa') },
                    { key: '13', label: t('header.enterprise') },
                    { key: '14', label: t('header.high_end') },
                    { key: '15', label: t('header.outdoor') },
                    { key: '16', label: t('header.insurance') }
                ]}
            />
        </div>
    )
}

export default Header
