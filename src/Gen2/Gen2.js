import React from 'react'
import './Gen2.css'
import Gen2Info from './Gen2Info/Gen2Info'
import PropTypes from 'prop-types'

const Gen2 = ({ addFavorite, gen2Pokemon }) => {
  let gen2 = gen2Pokemon.map((pokemon) => {
    return (
      <Gen2Info
      name={pokemon.name}
      id={pokemon.id}
      key={pokemon.id}
      addFavorite={addFavorite}
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

Gen2.propTypes = {
  addFavorite: PropTypes.func.isRequired,
  gen2Pokemon: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  )
}
