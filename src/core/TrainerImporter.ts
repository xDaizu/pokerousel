import data from '../../data/trainer_data.json'
import { findByName } from './Pokedex'
import type { Pokemon } from './Pokemon'
import type { Trainer } from './Trainer'
import {Stats} from "./Stats";

type TrainerListJson = TrainerJson[]
type TrainerJson = {
  isSubscriber?: boolean
  isActive?: boolean
  name: string
  spriteUrl?: string
  team: string[]
  theme: string
  title: string
  stats?: Stats
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
    isActive: trainerJson.isActive ?? false,
    stats: {
      pp: trainerJson?.stats?.pp,
      hp: trainerJson?.stats?.hp,
      cp: trainerJson?.stats?.cp,
    }
  }
}

function importPokemon(pokemonName: string): Pokemon {
  return findByName(pokemonName)
}
