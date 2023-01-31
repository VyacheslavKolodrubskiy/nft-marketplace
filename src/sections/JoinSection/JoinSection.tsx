import { FormEvent } from 'react'

import { EmailIcon } from '@/assets/images/icons'
import {
  Button,
  Card,
  Image,
  Section,
  Subtitle,
  Title,
} from '@/shared/components'

export function JoinSection() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <Section>
      <Card className="p-[30px] flex justify-between space-x-10 lg:flex-col lg:space-y-10 lg:space-x-0">
        <Image
          className="lg:w-full"
          src="join-image.png"
          alt="Astronaut read news"
          width={425}
          height={310}
        />

        <div className="space-y-5">
          <Title>Join our weekly digest</Title>
          <Subtitle>
            Get exclusive promotions &amp; updates straight to your inbox.
          </Subtitle>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <input
                className="placeholder:text-main w-full p-5 rounded-[20px] outline-none bg-white text-black"
                type="email"
                placeholder="Enter your email here"
              />
              <Button
                className="w-full"
                type="submit"
                icon={<EmailIcon />}
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </Section>
  )
}
