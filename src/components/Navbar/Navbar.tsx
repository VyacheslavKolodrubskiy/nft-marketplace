import { useEffect, useState } from 'react'

import { BurgerMenuIcon, CloseIcon } from '@/assets/images/icons'
import { useMediaQuery } from '@/hooks'
import { Link } from '@/shared/@types'
import { Button } from '@/shared/components'

import { navLinks } from './constants'

export function Navbar() {
  const isTablet = useMediaQuery('(max-width: 992px)')
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false)

  const MapNavbarLinks = navLinks.map(({ title, href }: Link, index) => (
    <li key={index}>
      <a
        onClick={handleClick}
        className="font-semibold text-white hover:text-white/70 duration-300"
        href={href}
      >
        {title}
      </a>
    </li>
  ))

  function handleClick() {
    if (isMobileMenuShown) {
      setIsMobileMenuShown(false)
    }
  }

  useEffect(() => {
    if (!isTablet) {
      setIsMobileMenuShown(false)
    }
  }, [isTablet])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape' && isMobileMenuShown) {
        setIsMobileMenuShown(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMobileMenuShown])

  return (
    <>
      {!isTablet ? (
        <nav>
          <ul className="gap-10 flex justify-between items-center">
            {MapNavbarLinks}
          </ul>
        </nav>
      ) : (
        <Button
          size="small"
          variant="transparent"
          className="hover:opacity-50 duration-300 px-4 outline-none"
          aria-label="burger menu"
          icon={<BurgerMenuIcon />}
          onClick={() => setIsMobileMenuShown(true)}
        />
      )}
      {isTablet && isMobileMenuShown ? (
        <nav
          className={`fixed top-0 left-0 bg-main w-full h-full text-4xl flex flex-col justify-center duration-300 items-center z-50`}
        >
          <ul className="gap-10 flex flex-col items-center">
            {MapNavbarLinks}
          </ul>

          <Button
            size="small"
            variant="transparent"
            className="absolute outline-none hover:opacity-50 duration-300 right-5 top-5 px-2"
            aria-label="close menu"
            icon={<CloseIcon />}
            onClick={() => setIsMobileMenuShown(false)}
          />
        </nav>
      ) : null}
    </>
  )
}
