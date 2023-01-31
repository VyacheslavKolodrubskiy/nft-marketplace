export interface AuctionCountDownProps extends AuctionCountDownState {
  className?: string
}

export interface AuctionCountDownState {
  hours: number
  minutes: number
  seconds: number
}
