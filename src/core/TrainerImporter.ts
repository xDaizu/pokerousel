import data from '../../data/trainer_data.json'

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
  const pokedexNumber = 255
  return {
    name: pokemonName,
    pokedexNumber,
    type1: 'Fire',
    type2: undefined,
    spriteUrl: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokedexNumber}.png`
  }
}
