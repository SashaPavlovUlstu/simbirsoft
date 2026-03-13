import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import MenuHeader from '@/ui_components/MenuHeader/MenuHeader'
import Container from '../Container/Container'

const { Content } = Layout

const AppLayout = () => {
  return (
    <Layout className="min-h-screen flex flex-col">
      <MenuHeader />
      <Content className="flex-1 p-6">
        <Container className="flex-1 flex flex-col">
          <Outlet />
        </Container>
      </Content>
    </Layout>
  )
}

export default AppLayout
