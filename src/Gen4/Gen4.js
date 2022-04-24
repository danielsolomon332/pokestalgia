import React from 'react'
import './Gen4.css'
import Gen4Info from './Gen4Info/Gen4Info'
import PropTypes from 'prop-types'

const Gen4 = ({ addFavorite, gen4Pokemon }) => {
  let gen4 = gen4Pokemon.map((pokemon) => {
    return (
      <Gen4Info
      name={pokemon.name}
      id={pokemon.id}
      key={pokemon.id}
      addFavorite={addFavorite}
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

Gen4.propTypes = {
  addFavorite: PropTypes.func.isRequired,
  gen4Pokemon: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  )
}
