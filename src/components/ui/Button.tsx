import type { ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

const baseClasses =
  'inline-flex items-center justify-center rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 active:scale-95'

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-bg shadow-glow hover:bg-accent-hover',
  secondary:
    'bg-transparent text-text border border-border-subtle hover:border-accent hover:text-accent',
}

export default function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className ?? ''}`}
      {...props}
    />
  )
}
