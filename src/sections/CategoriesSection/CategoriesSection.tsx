import { Card, Image, Section, Title } from '@/shared/components'

import { categoriesItems } from './constants'
import { CategoryCardProps } from './interfaces'

function CategoryCard({ name, image, icon }: CategoryCardProps) {
  return (
    <Card
      className="cursor-pointer group overflow-hidden p-0"
      tag="li"
    >
      <div className="relative">
        <Image
          className="rounded-tl-[20px] rounded-tr-[20px] w-full"
          src={image}
          width={240}
          height={240}
          alt={name}
        />

        <div className="bg-white/10 backdrop-blur-[15px] absolute inset-0 rounded-tl-[20px] rounded-tr-[20px] group-hover:inset-full duration-300" />

        <div className="absolute group-hover:inset-full inset-0 flex items-center justify-center duration-300">
          <Image
            src={icon}
            alt="icon"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="text-[22px] xs:text-base py-5 px-[20px] font-semibold capitalize ">
        {name}
      </div>
    </Card>
  )
}

export function CategoriesSection() {
  return (
    <Section id="categories">
      <Title className="mb-10">Browse Categories</Title>

      <ul className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-4 gap-4">
        {categoriesItems.map((category, index) => (
          <CategoryCard
            key={index}
            {...category}
          />
        ))}
      </ul>
    </Section>
  )
}
