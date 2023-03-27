import pokedexDataJSON from '../static/pokedex/pokedex.json'
import type { Pokemon } from './Pokemon'
import { APP_CONFIG } from './app-config'

type PokemonListJson = PokemonJson[]
type PokemonJson = {
  id: number
  name: { english: string }
  type: string[]
}

export function findByName(name: string): Pokemon {
  const pokedexData = pokedexDataJSON as unknown as PokemonListJson

  const pokemonDexData = pokedexData.find(
    (pokemon) => pokemon.name.english === name,
  )
  if (pokemonDexData === undefined) {
    throw new Error(`pokemon ${name} not found`)
  }

  let type1 = pokemonDexData.type[0]
  let type2: string | undefined = pokemonDexData.type[1]
  if (APP_CONFIG.removeFairyType) {
    type1 = type1 === 'Fairy' ? 'Normal' : type1
    type2 = type2 === 'Fairy' ? undefined : type2
  }

  return {
    name: pokemonDexData.name.english,
    pokedexNumber: pokemonDexData.id,
    type1,
    type2,
    spriteUrl: `${String(pokemonDexData.id).padStart(3, '0')}MS.png`,
  }
}
