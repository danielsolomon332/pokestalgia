import React from 'react'
import './Gen2.css'
import Gen2Info from './Gen2Info/Gen2Info'

const Gen2 = ({ gen2Pokemon }) => {
  let gen2 = gen2Pokemon.map((pokemon) => {
    return (
      <Gen2Info
      name={pokemon.name}
      id={pokemon.id}
      key={pokemon.id}
      />
    )
  })
  return (
    <div className='cards-container'>
      {gen2}
    </div>
  )
}

export default Gen2
