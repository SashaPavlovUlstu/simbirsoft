import { type FC } from 'react'

import type { ErrorMessageProps } from './types'

const ErrorMessage: FC<ErrorMessageProps> = ({ children, message }) => {
  return (
    <div className="p-6 bg-red-100 text-red-800 rounded-md text-center">
      {children || message || 'Произошла ошибка'}
    </div>
  )
}

export default ErrorMessage
