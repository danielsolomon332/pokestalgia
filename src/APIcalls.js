const getPokemonByGeneration = (generationNumber) => {
  return fetch(`https://pokeapi.co/api/v2/generation/${generationNumber}`).catch(
    (error) => {
      throw new Error(error)
    }
  )
}

const getAllPokemon = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1126').catch(
    (error) => {
      throw new Error(error)
    }
  )
}

export { getPokemonByGeneration, getAllPokemon }
