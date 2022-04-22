import React from 'react'
import './Gen3.css'
import Gen3Info from './Gen3Info/Gen3Info'

const Gen3 = ({ gen3Pokemon }) => {
  let gen3 = gen3Pokemon.map((pokemon) => {
    return (
      <Gen3Info
      name={pokemon.name}
      id={pokemon.id}
      key={pokemon.id}
      />
    )
  })
  return (
    <div className='ideas-container'>
      {gen3}
    </div>
  )
}

export default Gen3
