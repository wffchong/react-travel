import { Menu } from 'antd'
import { sideMenuList } from './mockup'
import styles from './SideMenu.module.css'
import { GifOutlined } from '@ant-design/icons'

const SideMenu: React.FC = () => {
    return (
        <Menu
            mode='vertical'
            className={styles['side-menu']}
            items={sideMenuList.map(m => ({
                label: m.title,
                key: m.title,
                icon: <GifOutlined />,
                children: m.subMenu.map(sm => ({
                    label: sm.title,
                    key: sm.title,
                    icon: <GifOutlined />,
                    children: sm.subMenu.map(sms => ({
                        label: sms,
                        key: sms,
                        icon: <GifOutlined />
                    }))
                }))
            }))}
        />
    )
}

export default SideMenu
