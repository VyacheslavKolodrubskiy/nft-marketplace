import { RocketIcon } from '@/assets/images/icons'
import {
  Button,
  Card,
  Image,
  Section,
  Subtitle,
  Title,
} from '@/shared/components'

import { creatorsItems } from './constants'
import { CreatorCardProps } from './interfaces'

function CreatorCard({ avatar, name, sales, index }: CreatorCardProps) {
  return (
    <Card
      tag="li"
      className="flex lg:flex-row relative flex-col items-center justify-center lg:space-x-5 lg:justify-start p-5"
    >
      <div className="relative">
        <div className="absolute lg:-left-2 lg:-top-2 flex items-center justify-center w-[30px] h-[30px] top-0 -left-10 text-[#858584] font-space-mono rounded-full bg-main">
          {index + 1}
        </div>
        <Image
          className="rounded-full mb-5 lg:mb-0 lg:w-[60px]"
          src={avatar}
          alt="Avatar"
          width={120}
          height={120}
        />
      </div>
      <div className="text-center lg:text-left">
        <h4 className="text-[22px] font-semibold capitalize">{name}</h4>
        <p className="text-[#858584] whitespace-nowrap">
          Total Sales:{' '}
          <span className="font-space-mono text-white">{sales}</span>
        </p>
      </div>
    </Card>
  )
}

export function CreatorsSection() {
  return (
    <Section
      id="creators"
      className="space-y-10"
    >
      <div className="flex items-end justify-between">
        <div>
          <Title>Top creators</Title>
          <Subtitle>
            Checkout Top Rated Creators on the NFT Marketplace
          </Subtitle>
        </div>

        <Button
          className="md:hidden"
          outlined
          icon={<RocketIcon className="stroke-accent" />}
        >
          View Rankings
        </Button>
      </div>

      <ul className="grid xl:grid-cols-3 md:grid-cols-1 lg:grid-cols-2 grid-cols-4 gap-7">
        {creatorsItems.map((item, index) => (
          <CreatorCard
            key={index}
            index={index}
            {...item}
          />
        ))}
      </ul>

      <Button
        className="hidden md:flex md:mx-auto xs:w-full"
        outlined
        icon={<RocketIcon className="stroke-accent" />}
      >
        View Rankings
      </Button>
    </Section>
  )
}
