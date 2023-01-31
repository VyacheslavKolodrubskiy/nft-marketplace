import { ButtonHTMLAttributes, ReactNode } from 'react'

import { IconPositions, Sizes, Variants } from './types'

export interface Props {
  children?: ReactNode
  variant?: Variants
  icon?: JSX.Element
  iconPosition?: IconPositions
  className?: string
  outlined?: boolean
  size?: Sizes
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClick?: () => void
}
