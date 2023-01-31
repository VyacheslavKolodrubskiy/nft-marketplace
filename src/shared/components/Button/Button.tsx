import { Props } from './interfaces'

export function Button({
  children,
  icon,
  onClick,
  className = '',
  outlined = false,
  type = 'button',
  variant = 'primary',
  iconPosition = 'start',
  size = 'medium',
}: Props) {
  const defaultClasses = [
    'text-white rounded-[20px] whitespace-nowrap font-semibold py-[19px] duration-300',
  ]

  switch (size) {
    case 'small':
      defaultClasses.push('px-[15px]')
      break
    case 'medium':
      defaultClasses.push('px-[50px]')
      break
    case 'large':
      defaultClasses.push('px-[80px]')
      break
    default:
      break
  }

  switch (variant) {
    case 'primary':
      defaultClasses.push('bg-accent')
      break
    case 'secondary':
      defaultClasses.push('bg-white text-main')
      break
    case 'transparent':
      defaultClasses.push('border-0 bg-transparent')
      break
    default:
      break
  }

  if (icon) {
    defaultClasses.push('flex items-center justify-center gap-4')
  }

  if (outlined) {
    defaultClasses.push('bg-transparent border-2 border-[#a259ff]')
  }

  return (
    <button
      type={type}
      className={`${defaultClasses.join(' ')} ${className} `}
      onClick={onClick}
    >
      {icon && iconPosition === 'start' && icon}
      {children}
      {icon && iconPosition === 'end' && icon}
    </button>
  )
}
