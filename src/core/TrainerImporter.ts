import { findByName } from './Pokedex'
import type { Pokemon } from './Pokemon'
import type { Trainer } from './Trainer'
import { Stats } from "./Stats";

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
  affiliation?: string
  isTournament?: boolean
}

export function importTrainers(): Trainer[] {
  const request = new XMLHttpRequest();
  request.open("GET", "https://cors-anywhere.herokuapp.com/34.139.8.59:8080/pokerousel", false); // `false` makes the request synchronous
  request.send(null);

  if (request.status === 200) {
    console.log(request.responseText);
    const data = JSON.parse(request.responseText);

    const trainerData = data as unknown as TrainerListJson

    const trainers = trainerData.map(importTrainer)

    return trainers
  }
  return [];
}

function importTrainer(trainerJson: TrainerJson): Trainer {
  return {
    name: trainerJson.name,
    isSubscriber: trainerJson.isSubscriber ?? false,
    spriteUrl: trainerJson.spriteUrl,
    title: trainerJson.title,
    theme: trainerJson.theme,
    team: trainerJson.team.map(importPokemon),
    isActive: trainerJson.isActive ?? true,
    stats: {
      pp: trainerJson?.stats?.pp,
      hp: trainerJson?.stats?.hp,
      cp: trainerJson?.stats?.cp,
    },
    affiliation: trainerJson.affiliation ?? 'HYL',
    isTournament: trainerJson.isTournament ?? false
  }
}

function importPokemon(pokemonName: string): Pokemon {
  return findByName(pokemonName)
}

