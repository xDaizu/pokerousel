import type { Pokemon } from './Pokemon'

export interface Trainer {
  isSubscriber: boolean
  isActive: boolean
  name: string
  spriteUrl?: string
  team: Pokemon[]
  theme: string
  title: string
}
