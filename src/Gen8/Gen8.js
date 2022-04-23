import React from 'react'
import './Gen8.css'
import Gen8Info from './Gen8Info/Gen8Info'

const Gen8 = ({ addFavorite, gen8Pokemon }) => {
  let gen8 = gen8Pokemon.map((pokemon) => {
    return (
      <Gen8Info
      name={pokemon.name}
      id={pokemon.id}
      key={pokemon.id}
      addFavorite={addFavorite}
      />
    )
  })
  return (
    <div className='cards-container'>
      {gen8}
    </div>
  )
}

export default Gen8
