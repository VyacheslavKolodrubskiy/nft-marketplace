import { useEffect, useState } from 'react'

import { EyeIcon } from '@/assets/images/icons'
import { Button, Card, Image } from '@/shared/components'

import { AuctionCountDownProps, AuctionCountDownState } from './interfaces'

function AuctionCountDown({
  className = '',
  hours,
  minutes,
  seconds,
}: AuctionCountDownProps) {
  return (
    <div
      className={`p-[30px] h-min rounded-[20px] font-space-mono bg-[#3b3b3b]/50 backdrop-blur-[10px] ${className}`}
    >
      <h5 className="text-xs">Auction ends in:</h5>
      <div className="grid grid-cols-5 text-center">
        <div className="flex flex-col items-center">
          <span className="text-[38px] font-bold">{hours}</span>
          <span className="text-xs">Hours</span>
        </div>
        <div className="text-[28px] font-bold">:</div>
        <div className="flex flex-col items-center">
          <span className="text-[38px] font-bold">{minutes}</span>
          <span className="text-xs">Minutes</span>
        </div>
        <div className="text-[28px] font-bold">:</div>
        <div className="flex flex-col items-center">
          <span className="text-[38px] font-bold">{seconds}</span>
          <span className="text-xs">Seconds</span>
        </div>
      </div>
    </div>
  )
}

export function AuctionSection() {
  const [timer, setTimer] = useState<AuctionCountDownState>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    function startTimer() {
      const timerInterval = setInterval(() => {
        const currentTime = new Date()
        const auctionEndTime = new Date('2023-2-10')

        const seconds = Math.floor(
          (auctionEndTime.getTime() - currentTime.getTime()) / 1000
        )

        const hours = Math.floor(seconds / 3600)
        const minutes = Math.floor((seconds % 3600) / 60)
        const secondsLeft = seconds % 60

        setTimer({
          hours,
          minutes,
          seconds: secondsLeft,
        })

        if (seconds < 0) {
          clearInterval(timerInterval)
        }
      }, 1000)
    }

    startTimer()
  }, [])

  return (
    <section className="bg-auction py-20 relative after:bg-gradient-to-b after:from-[#a259ff]/0 after:to-[#a259ff] min-h-screen bg-no-repeat bg-cover bg-center after:w-full after:h-full after:absolute after:pointer-events-none after:inset-0 flex items-end justify-end">
      <div className="container flex items-center justify-between z-10">
        <div className="space-y-4">
          <Card className="inline-flex px-5 py-2 items-center space-x-4">
            <Image
              src="avatars/anima-kid.png"
              alt="Avatar"
              width={24}
              height={24}
            />
            <span>Shroomie</span>
          </Card>

          <h4 className="text-[51px] lg:text-[38px] font-semibold">
            Magic Mashrooms
          </h4>

          <AuctionCountDown
            {...timer}
            className="hidden sm:block"
          />

          <Button
            className="xs:w-full"
            variant="secondary"
            icon={<EyeIcon />}
          >
            See NFT
          </Button>
          <div></div>
        </div>

        <AuctionCountDown
          {...timer}
          className="sm:hidden"
        />
      </div>
    </section>
  )
}
