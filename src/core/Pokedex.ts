import pokedexDataJSON from '../static/pokedex/pokedex.json'

type PokemonListJson = PokemonJson[]
type PokemonJson = {
  id: number
  name: { english: string }
  type: string[]
}

export function findByName(name: string): Pokemon {
  const pokedexData = pokedexDataJSON as unknown as PokemonListJson

  const pokemonDexData = pokedexData.find(pokemon => pokemon.name.english === name)
  if (pokemonDexData === undefined) {
    throw `pokemon ${name} not found`
  }
  return {
    name: pokemonDexData.name.english,
    pokedexNumber: pokemonDexData.id,
    type1: pokemonDexData.type[0],
    type2: pokemonDexData.type[1] ?? undefined,
    spriteUrl: `${String(pokemonDexData.id).padStart(3, '0')}MS.png`
  }
}