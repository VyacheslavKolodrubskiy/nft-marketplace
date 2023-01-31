import { Image, LogoLink } from '@/shared/components'

import { socialLinks } from './constants'

export function Footer() {
  return (
    <footer className="py-10 bg-[#3b3b3b]">
      <div className="container flex items-center justify-between text-gray-300 sm:flex-col sm:space-y-8">
        <LogoLink />

        <ul className="flex items-center space-x-6">
          {socialLinks.map(({ href, icon }, index) => (
            <li key={index}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="opacity-50 hover:opacity-100 duration-300"
                  src={icon}
                  alt={icon}
                  width={32}
                  height={32}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
