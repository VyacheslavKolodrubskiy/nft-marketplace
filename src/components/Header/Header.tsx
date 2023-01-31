import { LogoLink } from '@/shared/components'

import { Navbar } from '../Navbar'

export function Header() {
  return (
    <header className="fixed bg-main top-0 left-0 w-full z-50 py-5">
      <div className="flex items-center justify-between container">
        <LogoLink />

        <div className="flex items-center gap-20">
          <Navbar />
        </div>
      </div>
    </header>
  )
}
