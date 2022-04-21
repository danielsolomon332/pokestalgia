const getPokemonByGeneration = (generationNumber) => {
  return fetch(`https://pokeapi.co/api/v2/generation/${generationNumber}`).catch(
    (error) => {
      throw new Error(error)
    }
  )
}

const getSinglePokemon = (nameOrId) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`).catch(
    (error) => {
      throw new Error(error)
    }
  )
}

export { getPokemonByGeneration, getSinglePokemon }
