import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export function Title({ children, className = '' }: Props) {
  return (
    <h2
      className={`text-[38px] leading-[46px] xl:text-[28px] xk:leading-[39px] font-semibold capitalize ${className} `}
    >
      {children}
    </h2>
  )
}
