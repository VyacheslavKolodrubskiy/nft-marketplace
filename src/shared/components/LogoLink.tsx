import { Image } from './Image'

export function LogoLink({ className = '' }: { className?: string }) {
  return (
    <a
      className={className}
      href="#hero"
    >
      <Image
        src="icons/logo.svg"
        alt="Logo"
        width={244}
        height={32}
      />
    </a>
  )
}
