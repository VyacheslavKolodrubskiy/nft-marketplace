import { useEffect, useState } from 'react'

import { ArrowUpIcon } from './assets/images/icons'
import { Footer, Header } from './components'
import {
  AuctionSection,
  CategoriesSection,
  CollectionSection,
  CreatorsSection,
  DiscoverSection,
  HeroSection,
  HowItWorksSection,
  JoinSection,
} from './sections'
import { Button } from './shared/components'

function ArrowUp({ className = '' }: { className?: string }) {
  return (
    <a
      className={`fixed bottom-2 z-10 right-2 duration-300 ${className}`}
      href="#hero"
    >
      <Button
        variant="transparent"
        size="small"
        icon={<ArrowUpIcon />}
      />
    </a>
  )
}

export function App() {
  const [isArrowUpShown, setIsArrowUpShown] = useState(false)

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 1500) {
        setIsArrowUpShown(true)
      } else {
        setIsArrowUpShown(false)
      }
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="overflow-hidden">
      <ArrowUp
        className={
          isArrowUpShown
            ? 'visible opacity-100 translate-y-0'
            : 'invisible opacity-0 translate-y-5'
        }
      />
      <Header />
      <main>
        <HeroSection />
        <CollectionSection />
        <CreatorsSection />
        <CategoriesSection />
        <DiscoverSection />
        <AuctionSection />
        <HowItWorksSection />
        <JoinSection />
      </main>
      {/* <Footer /> */}
    </div>
  )
}
