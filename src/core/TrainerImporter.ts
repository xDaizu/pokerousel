import data from '../../data/trainer_data.json'
import {findByName} from "./Pokedex";

type TrainerListJson = TrainerJson[]
type TrainerJson = {
  name: string
  theme: string
  spriteUrl: string
  team: string[]
}

export function importTrainers(): Trainer[] {
  const trainerData = data as unknown as TrainerListJson

  const trainers = trainerData.map(importTrainer)

  return trainers;
}

function importTrainer(trainerJson: TrainerJson): Trainer {
  return {
    name: trainerJson.name,
    spriteUrl: trainerJson.spriteUrl,
    theme: trainerJson.theme,
    team: trainerJson.team.map(importPokemon)
  }
}

function importPokemon(pokemonName: string): Pokemon {
  return findByName(pokemonName);
}
