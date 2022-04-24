import React from 'react'
import './Gen8.css'
import Gen8Info from './Gen8Info/Gen8Info'
import PropTypes from 'prop-types'

const Gen8 = ({ addFavorite, gen8Pokemon }) => {
  let gen8 = gen8Pokemon.map((pokemon) => {
    return (
      <Gen8Info
      name={pokemon.name}
      id={pokemon.id}
      key={pokemon.id}
      addFavorite={addFavorite}
      />
    )
  })
  return (
    <div className='cards-container'>
      {gen8}
    </div>
  )
}

export default Gen8

Gen8.propTypes = {
  addFavorite: PropTypes.func.isRequired,
  gen8Pokemon: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  )
}
