import type { ReactNode } from 'react'

interface SectionTitleProps {
  children: ReactNode
  className?: string
}

export default function SectionTitle({
  children,
  className,
}: SectionTitleProps) {
  return (
    <h2 className={`font-heading text-3xl sm:text-4xl text-text ${className ?? ''}`}>
      {children}
    </h2>
  )
}
