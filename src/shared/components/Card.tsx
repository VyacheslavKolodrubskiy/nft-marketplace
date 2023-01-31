import { ElementType, ReactNode } from 'react'

interface Props {
  children?: ReactNode
  className?: string
  tag?: ElementType
}

export function Card({ children, className = '', tag: Tag = 'div' }: Props) {
  return (
    <Tag className={`rounded-[20px] bg-[#3b3b3b] ${className}`}>{children}</Tag>
  )
}
