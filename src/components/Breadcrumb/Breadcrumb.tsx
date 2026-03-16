import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'

import type { AppBreadcrumbProps } from './types'

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
