import { type FC } from 'react'

import type { ErrorMessageProps } from './types'

import styles from './ErrorMessage.module.css'

const ErrorMessage: FC<ErrorMessageProps> = ({ children, message }) => {
  return (
    <div className={styles.message}>
      {children || message || 'Произошла ошибка'}
    </div>
  )
}

export default ErrorMessage
