import type { JSX } from 'react'

export interface BreadcrumbItem {
  title: string | JSX.Element
  link?: string
}

export interface AppBreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}
