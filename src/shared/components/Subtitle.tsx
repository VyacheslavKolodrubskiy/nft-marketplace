import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export function Subtitle({ children, className = '' }: Props) {
  return (
    <p className={`text-[22px] lg:text-base capitalize ${className}`}>
      {children}
    </p>
  )
}
