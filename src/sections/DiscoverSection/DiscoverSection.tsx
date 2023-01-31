import { EyeIcon } from '@/assets/images/icons'
import {
  Button,
  Card,
  Image,
  Section,
  Subtitle,
  Title,
} from '@/shared/components'

import { discoverItems } from './constants'
import { DiscoverCardProps } from './interfaces'

function DiscoverCard({
  image,
  title,
  authorAvatar,
  authorName,
  price,
  highestBid,
}: DiscoverCardProps) {
  return (
    <Card tag="li">
      <Image
        className="w-full rounded-tl-[20px] rounded-tr-[20px]"
        src={image}
        alt="Discover"
        width={330}
        height={296}
      />

      <div className="p-5 space-y-6">
        <div className="space-y-2">
          <h4 className="text-[22px] font-semibold capitalize ">{title}</h4>
          <div className="flex items-center space-x-4">
            <Image
              className="rounded-full"
              src={authorAvatar}
              alt="Author"
              width={24}
              height={24}
            />
            <span className="font-space-mono">{authorName}</span>
          </div>
        </div>

        <div className="flex justify-between font-space-mono">
          <div>
            <div className="text-xs text-[#858584] mb-2">Price</div>
            <span className="text-base text-white">{price}</span>
          </div>
          <div>
            <div className="text-xs text-[#858584] mb-2"> Highest Bid</div>
            <span className="text-base text-white">{highestBid}</span>
          </div>
        </div>
      </div>
    </Card>
  )
}

export function DiscoverSection() {
  return (
    <Section
      id="discover"
      className="space-y-10"
    >
      <div className="flex items-end justify-between">
        <div>
          <Title>Discover More NFTs</Title>
          <Subtitle>Explore new trending NFTs</Subtitle>
        </div>

        <Button
          outlined
          className="md:hidden"
          icon={<EyeIcon />}
        >
          See All
        </Button>
      </div>

      <ul className="grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-2 gap-6">
        {discoverItems.map((item, index) => (
          <DiscoverCard
            key={index}
            {...item}
          />
        ))}
      </ul>

      <Button
        outlined
        className="hidden md:flex md:mx-auto xs:w-full"
        icon={<EyeIcon />}
      >
        See All
      </Button>
    </Section>
  )
}
