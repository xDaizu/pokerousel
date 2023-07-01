import type { Pokemon } from './Pokemon'
import type { Stats } from './Stats'

export interface Trainer {
  isSubscriber: boolean
  isActive: boolean
  name: string
  spriteUrl?: string
  team: Pokemon[]
  stats: Stats
  theme: string
  title: string
  affiliation: string
}
