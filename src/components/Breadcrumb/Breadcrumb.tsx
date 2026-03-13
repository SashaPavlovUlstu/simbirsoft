import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import type { AppBreadcrumbProps } from './types'
import type { FC } from 'react'

const AppBreadcrumb: FC<AppBreadcrumbProps> = ({ items, className }) => {
  return (
    <Breadcrumb
      className={className}
      items={items.map((item, _) => ({
        title: item.link ? (
          <Link to={item.link}>{item.title}</Link>
        ) : (
          item.title
        ),
      }))}
    />
  )
}

export default AppBreadcrumb
