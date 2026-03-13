import type { FC } from 'react'
import type { ContainerProps } from './types'

const Container: FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`mx-auto w-full px-4 max-w-[1280px] ${className}`}>
      {children}
    </div>
  )
}

export default Container
