import type { ReactNode } from 'react'

export interface UniqueCardProps {
  item: any
  link: string
  title: string
  description?: string
  imageSrc?: string
  children?: ReactNode
}
