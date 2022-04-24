import React from 'react'
import './Gen5.css'
import Gen5Info from './Gen5Info/Gen5Info'
import PropTypes from 'prop-types'

const Gen5 = ({ addFavorite, gen5Pokemon }) => {
  let gen5 = gen5Pokemon.map((pokemon) => {
    return (
      <Gen5Info
      name={pokemon.name}
      id={pokemon.id}
      key={pokemon.id}
      addFavorite={addFavorite}
      />
    )
  })
  return (
    <div className='cards-container'>
      {gen5}
    </div>
  )
}

export default Gen5

Gen5.propTypes = {
  addFavorite: PropTypes.func.isRequired,
  gen5Pokemon: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  )
}
