import type { ReactNode } from 'react'

export interface CardGridProps<T> {
  items: T[]
  renderItem: (item: T) => ReactNode
  className?: string
}
