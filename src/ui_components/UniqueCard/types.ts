import type { ReactNode } from 'react'

export interface UniqueCardProps {
  link: string
  title: string
  description?: string
  imageSrc?: string
  children?: ReactNode
}
