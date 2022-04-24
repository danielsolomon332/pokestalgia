import React from 'react'
import './Gen3.css'
import Gen3Info from './Gen3Info/Gen3Info'

const Gen3 = ({ addFavorite, gen3Pokemon }) => {
  let gen3 = gen3Pokemon.map((pokemon) => {
    return (
      <Gen3Info
      name={pokemon.name}
      id={pokemon.id}
      key={pokemon.id}
      addFavorite={addFavorite}
      />
    )
  })
  return (
    <div className='cards-container'>
      {gen3}
    </div>
  )
}

export default Gen3
