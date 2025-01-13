import { findByName } from './Pokedex'
import type { Pokemon } from './Pokemon'
import type { Trainer } from './Trainer'
import { Stats } from "./Stats";
import { BadgeChallenge } from './BadgeChallenge';
import { Badge, getBadgesFromKanto } from './Badge';

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
  challenges: ChallengeJson[]
}

type ChallengeJson = {
  type: string
  shortname: string
  obtained: boolean
  level: number
}

export function importTrainers(): Trainer[] {
  const request = new XMLHttpRequest();

  request.open("GET", "https://pokeprofessor.xyz/pokerousel", false); // `false` makes the request synchronous
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
  return <Trainer>{
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
    isTournament: trainerJson.isTournament ?? false,
    badges: importChallenge(trainerJson.challenges??[]),
  }
}

function importPokemon(pokemonName: string): Pokemon {
  return findByName(pokemonName)
}

function importChallenge(challenges: ChallengeJson[]): BadgeChallenge[] {
  return getBadgesFromKanto().map((badge: Badge) => {
    const jsonBadgeChallenge = challenges.find((c: any) => c.type === 'badge' && c.shortname === badge.shortname)

    if (badge.shortname === 'cascade' || badge.shortname === 'boulder'|| badge.shortname === 'thunder') {
      return <BadgeChallenge>{
        badge: badge,
        obtained: true,
        level: badge.shortname === 'cascade' ? 3 : 1,
      }
    }
    return <BadgeChallenge>{
      badge: badge,
      obtained: jsonBadgeChallenge?.obtained ?? false,
      level: 1,
    }  
  })
}

