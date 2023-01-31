import { Card, Image, Section, Subtitle, Title } from '@/shared/components'

import { cardItems } from './constants'
import { HowItWorksCardProps } from './interfaces'

function HowItWorksCard({ image, title, description }: HowItWorksCardProps) {
  return (
    <Card
      className="space-y-4 p-5 text-center flex flex-col items-center justify-center"
      tag="li"
    >
      <Image
        src={image}
        alt={title}
        width={250}
        height={250}
      />
      <div className="space-y-2">
        <h4 className="text-[22px] font-semibold ">{title}</h4>
        <p>{description}</p>
      </div>
    </Card>
  )
}

export function HowItWorksSection() {
  return (
    <Section id="how-it-works">
      <div className="mb-20">
        <Title>How it works</Title>
        <Subtitle>Find out how to get started</Subtitle>
      </div>

      <ul className="grid lg:grid-cols-2 sm:grid-cols-1 grid-cols-3 gap-7">
        {cardItems.map((item, index) => (
          <HowItWorksCard
            {...item}
            key={index}
          />
        ))}
      </ul>
    </Section>
  )
}
