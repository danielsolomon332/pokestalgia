import React from 'react'
import './Gen6.css'
import Gen6Info from './Gen6Info/Gen6Info'

const Gen6 = ({ addFavorite, gen6Pokemon }) => {
  let gen6 = gen6Pokemon.map((pokemon) => {
    return (
      <Gen6Info
      name={pokemon.name}
      id={pokemon.id}
      key={pokemon.id}
      addFavorite={addFavorite}
      />
    )
  })
  return (
    <div className='cards-container'>
      {gen6}
    </div>
  )
}

export default Gen6
