import React from 'react'
import './Gen1.css'
import Gen1Info from './Gen1Info/Gen1Info'
import PropTypes from 'prop-types'

const Gen1 = ({ addFavorite, gen1Pokemon }) => {
  let gen1 = gen1Pokemon.map((pokemon) => {
    return (
      <Gen1Info
      name={pokemon.name}
      id={pokemon.id}
      key={pokemon.id}
      addFavorite={addFavorite}
      />
    )
  })
  return (
    <div className='cards-container'>
      {gen1}
    </div>
  )
}

export default Gen1

Gen1.propTypes = {
  addFavorite: PropTypes.func.isRequired,
  gen1Pokemon: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  )
}
