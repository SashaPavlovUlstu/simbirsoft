import { type FC } from 'react'
import type { IconProps } from './types'

const FifaIcon: FC<IconProps> = ({ size = 24, className, ...props }) => (
  <svg
    className={className}
    width={size}
    height={(size * 328) / 1000}
    viewBox="0 0 1000 328"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M283 0h104v327h-104M0 0h253l-26 72h-123v66h99l-26 72h-73v118h-104M456 0h253l-26 72h-123v66h99l-26 72h-73v118h-104M775 0l-119 328h101l13-43h116l13 43h101l-119-328m-53 87 39 133h-78"
      fill="currentColor"
    />
  </svg>
)

export default FifaIcon
