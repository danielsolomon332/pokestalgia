import React from 'react'
import './Gen7.css'
import Gen7Info from './Gen7Info/Gen7Info'

const Gen7 = ({ addFavorite, gen7Pokemon }) => {
  let gen7 = gen7Pokemon.map((pokemon) => {
    return (
      <Gen7Info
      name={pokemon.name}
      id={pokemon.id}
      key={pokemon.id}
      addFavorite={addFavorite}
      />
    )
  })
  return (
    <div className='cards-container'>
      {gen7}
    </div>
  )
}

export default Gen7
