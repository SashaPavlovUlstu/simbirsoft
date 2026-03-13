import type { FC } from 'react'
import type { PageWrapperProps } from './types'

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="p-6 bg-gray-200 min-h-screen flex flex-col">{children}</div>
  )
}

export default PageWrapper
