import type { FC } from 'react'

import type { CardGridProps } from './types'

import styles from './CardGrid.module.css'

const CardGrid = <T extends unknown>({
  items,
  renderItem,
  className = '',
}: CardGridProps<T>): ReturnType<FC> => (
  <div className={`${styles.grid} ${className}`.trim()}>
    {items.map((item, index) => (
      <div key={index} className={styles.item}>
        {renderItem(item)}
      </div>
    ))}
  </div>
)

export default CardGrid
