import FifaIcon from '@/assets/FifaIcon'
import { Layout, Menu } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import Container from '@/components/Container/Container'
import { MENUITEMS } from '@/constants/menu'

const { Header } = Layout

const MenuHeader = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Header className="bg-white border-b border-gray-200 px-0">
      <Container className="flex items-center gap-6">
        <FifaIcon size={80} className="text-blue-600" />
        <Menu
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={MENUITEMS}
          onClick={(e) => navigate(e.key)}
          className="flex-1 border-b-0"
        />
      </Container>
    </Header>
  )
}

export default MenuHeader
