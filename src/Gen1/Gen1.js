import React from 'react'
import './Gen1.css'
import Gen1Info from './Gen1Info/Gen1Info'

const Gen1 = ({ gen1Pokemon }) => {
  let gen1 = gen1Pokemon.map((pokemon) => {
    return (
      <Gen1Info
      name={pokemon.name}
      id={pokemon.id}
      key={pokemon.id}
      />
    )
  })
  return (
    <div className='ideas-container'>
      {gen1}
    </div>
  )
}

export default Gen1
