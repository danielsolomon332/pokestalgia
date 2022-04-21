import React from 'react'
import './Card.css'
import CardInfo from './CardInfo/CardInfo'

const Card = ({ gen1Pokemon }) => {
  console.log(gen1Pokemon)
  let gen1 = gen1Pokemon.map(pokemon => {
    return (
      <CardInfo
      name={pokemon.name}
      id={pokemon.id}
      />
    )
  })
  return (
    <div>
      {gen1}
    </div>
  )
}

export default Card
