import type { FC } from 'react'

import type { ContainerProps } from './types'

import styles from './Container.module.css'

const Container: FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`${styles.container} ${className}`.trim()}>{children}</div>
  )
}

export default Container
