import data from '../../data/trainer_data.json'
import { findByName } from './Pokedex'
import type { Pokemon } from './Pokemon'
import type { Trainer } from './Trainer'

type TrainerListJson = TrainerJson[]
type TrainerJson = {
  isSubscriber?: boolean
  name: string
  spriteUrl?: string
  team: string[]
  theme: string
  title: string
}

export function importTrainers(): Trainer[] {
  const trainerData = data as unknown as TrainerListJson

  const trainers = trainerData.map(importTrainer)

  return trainers
}

function importTrainer(trainerJson: TrainerJson): Trainer {
  return {
    name: trainerJson.name,
    isSubscriber: trainerJson.isSubscriber ?? false,
    spriteUrl: trainerJson.spriteUrl,
    title: trainerJson.title,
    theme: trainerJson.theme,
    team: trainerJson.team.map(importPokemon),
  }
}

function importPokemon(pokemonName: string): Pokemon {
  return findByName(pokemonName)
}
