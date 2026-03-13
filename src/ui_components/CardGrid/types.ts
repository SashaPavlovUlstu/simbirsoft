import type { ReactNode } from 'react'

export interface CardGridProps<T> {
  items: T[]
  renderItem: (item: T) => ReactNode
  xs?: number
  sm?: number
  md?: number
  lg?: number
  gutter?: [number, number]
}
