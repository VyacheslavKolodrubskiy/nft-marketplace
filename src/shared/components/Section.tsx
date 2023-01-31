import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  id?: string
}

export function Section({ children, className = '', id = '' }: Props) {
  return (
    <section
      className="py-20 sm:py-14 scroll-mt-10"
      id={id}
    >
      <div className={`container ${className}`}>{children}</div>
    </section>
  )
}
