import React from 'react'
import './Gen4.css'
import Gen4Info from './Gen4Info/Gen4Info'

const Gen4 = ({ gen4Pokemon }) => {
  let gen4 = gen4Pokemon.map((pokemon) => {
    return (
      <Gen4Info
      name={pokemon.name}
      id={pokemon.id}
      key={pokemon.id}
      />
    )
  })
  return (
    <div className='cards-container'>
      {gen4}
    </div>
  )
}

export default Gen4
