import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'

import Container from '../Container/Container'
import MenuHeader from '@/ui_components/MenuHeader/MenuHeader'

import styles from './AppLayout.module.css'

const { Content } = Layout

const AppLayout = () => {
  return (
    <Layout className={styles.layout}>
      <MenuHeader />
      <Content className={styles.content}>
        <Container className={styles.container}>
          <Outlet />
        </Container>
      </Content>
    </Layout>
  )
}

export default AppLayout
