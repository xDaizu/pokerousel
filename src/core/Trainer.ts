import type { Pokemon } from './Pokemon'

export interface Trainer {
  isSubscriber: boolean
  name: string
  spriteUrl?: string
  team: Pokemon[]
  theme: string
  title: string
}
