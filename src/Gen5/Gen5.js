import React from 'react'
import './Gen5.css'
import Gen5Info from './Gen5Info/Gen5Info'

const Gen5 = ({ addFavorite, gen5Pokemon }) => {
  let gen5 = gen5Pokemon.map((pokemon) => {
    return (
      <Gen5Info
      name={pokemon.name}
      id={pokemon.id}
      key={pokemon.id}
      addFavorite={addFavorite}
      />
    )
  })
  return (
    <div className='cards-container'>
      {gen5}
    </div>
  )
}

export default Gen5
