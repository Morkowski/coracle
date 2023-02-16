import type {Event} from 'nostr-tools'

export type Relay = {
  url: string
  score?: number
  write?: boolean
  read?: boolean
}

export type Person = {
  pubkey: string
  picture?: string
  relays?: Array<Relay>
  muffle?: Array<Array<string>>
  petnames?: Array<Array<string>>
}


export type MyEvent = Event & {
  seen_on: string
}

export type DisplayEvent = MyEvent & {
  replies: Array<MyEvent>
  reactions: Array<MyEvent>
  children: Array<DisplayEvent>
}