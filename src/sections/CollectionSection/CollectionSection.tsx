import { Image, Section, Subtitle, Title } from '@/shared/components'

import { collectionItems } from './constants'
import { CollectionCardProps } from './interfaces'

function CollectionCard({
  name,
  authorNick,
  authorAvatar,
  quantity,
  primaryImage,
  secondaryImages,
}: CollectionCardProps) {
  return (
    <li className="space-y-4">
      <Image
        className="rounded-[20px] w-full"
        src={primaryImage}
        alt="Primary Image"
        width={330}
        height={330}
      />

      <div className="grid sm:justify-items-center grid-cols-3 gap-5">
        {secondaryImages.map((image, index) => (
          <Image
            className="rounded-[20px]"
            src={image}
            key={index}
            alt={`Secondary Image ${index + 1}`}
            width={100}
            height={100}
          />
        ))}

        <div className="rounded-[20px] flex items-center justify-center bg-accent text-[22px] w-full max-w-[99px] font-bold font-space-mono md:text-base">
          {quantity}
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-[22px] font-semibold">{name}</h4>
        <div className="flex items-center space-x-2">
          <Image
            className="rounded-full"
            src={authorAvatar}
            alt="Author Avatar"
            width={24}
            height={24}
          />
          <span>{authorNick}</span>
        </div>
      </div>
    </li>
  )
}

export function CollectionSection() {
  return (
    <Section id="collection">
      <div className="space-y-2 mb-10">
        <Title>Collection Collection</Title>
        <Subtitle>Checkout our weekly updated trending collection.</Subtitle>
      </div>

      <ul className="grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-4 sm:gap-10">
        {collectionItems.map((item, index) => (
          <CollectionCard
            {...item}
            key={index}
          />
        ))}
      </ul>
    </Section>
  )
}
