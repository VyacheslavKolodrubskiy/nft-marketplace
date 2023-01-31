import { RocketIcon } from '@/assets/images/icons'
import { Button, Image, Section, Subtitle } from '@/shared/components'

import { featuresItems } from './constants'
import { FeatureBlockProps, HeroRightBlockProps } from './interfaces'

function FeatureBlock({ count, label }: FeatureBlockProps) {
  return (
    <li>
      <h4 className="text-[28px] lg:text-[22px] font-bold capitalize font-space-mono">
        {count}
      </h4>
      <p className="text-[24px] lg:text-base">{label}</p>
    </li>
  )
}

function HeroLefBLock() {
  return (
    <div className="max-w-[510px] lg:max-w-[330px] space-y-10 md:max-w-full">
      <h1 className="text-[67px] lg:text-[38px] lg:leading-[46px] leading-[74px] font-semibold capitalize">
        <p>Discover</p>
        <p> digital art &</p>
        <p> Collect NFTs</p>
      </h1>
      <Subtitle>
        NFT marketplace UI created with Anima for Figma. Collect, buy and sell
        art from more than 20k NFT artists.
      </Subtitle>

      <HeroRightBLock className="hidden md:block md:max-w-full" />

      <Button
        className="xs:w-full"
        icon={<RocketIcon />}
      >
        Get Started
      </Button>

      <ul className="flex items-center justify-between">
        {featuresItems.map((feature, index) => (
          <FeatureBlock
            key={index}
            {...feature}
          />
        ))}
      </ul>
    </div>
  )
}

function HeroRightBLock({ className = '' }: HeroRightBlockProps) {
  return (
    <div className={`max-w-[510px] lg:max-w-[330px] ${className}`}>
      <Image
        className="rounded-tl-[20px] rounded-tr-[20px] w-full"
        src="hero-image.png"
        alt="Hero image"
        width={510}
        height={401}
      />

      <div className="rounded-bl-[20px] space-y-2 rounded-br-[20px] bg-[#3b3b3b] p-5">
        <h4 className="text-[22px] font-semibold">Space Walking</h4>
        <div className="flex items-center space-x-4">
          <Image
            src="avatars/anima-kid.png"
            width={24}
            height={24}
            alt="Avatar Anima Kid"
          />
          <span>Animakid</span>
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <Section
      id="hero"
      className="flex space-x-[30px] justify-between pt-40"
    >
      <HeroLefBLock />
      <HeroRightBLock className="md:hidden" />
    </Section>
  )
}
