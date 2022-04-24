import React from 'react'
import './Gen7.css'
import Gen7Info from './Gen7Info/Gen7Info'
import PropTypes from 'prop-types'

const Gen7 = ({ addFavorite, gen7Pokemon }) => {
  let gen7 = gen7Pokemon.map((pokemon) => {
    return (
      <Gen7Info
      name={pokemon.name}
      id={pokemon.id}
      key={pokemon.id}
      addFavorite={addFavorite}
      />
    )
  })
  return (
    <div className='cards-container'>
      {gen7}
    </div>
  )
}

export default Gen7

Gen7.propTypes = {
  addFavorite: PropTypes.func.isRequired,
  gen7Pokemon: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  )
}
