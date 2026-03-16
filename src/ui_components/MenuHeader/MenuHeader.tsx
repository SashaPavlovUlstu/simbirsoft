import { useLocation, useNavigate } from 'react-router-dom'
import { ConfigProvider, Layout, Menu } from 'antd'

import FifaIcon from '@/assets/FifaIcon'
import Container from '@/components/Container/Container'
import { MENUITEMS } from '@/constants/menu'

import { menuHeaderTheme } from './config'
import styles from './MenuHeader.module.css'

const { Header } = Layout

const MenuHeader = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <ConfigProvider theme={menuHeaderTheme}>
      <Header className={styles.header}>
        <Container className={styles.inner}>
          <FifaIcon size={84} className={styles.logo} />
          <Menu
            mode="horizontal"
            disabledOverflow
            selectedKeys={[location.pathname]}
            items={MENUITEMS}
            onClick={(e) => navigate(e.key)}
            className={styles.menu}
          />
        </Container>
      </Header>
    </ConfigProvider>
  )
}

export default MenuHeader
