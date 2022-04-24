import React from 'react'
import './Gen3.css'
import Gen3Info from './Gen3Info/Gen3Info'
import PropTypes from 'prop-types'

const Gen3 = ({ addFavorite, gen3Pokemon }) => {
  let gen3 = gen3Pokemon.map((pokemon) => {
    return (
      <Gen3Info
      name={pokemon.name}
      id={pokemon.id}
      key={pokemon.id}
      addFavorite={addFavorite}
      />
    )
  })
  return (
    <div className='cards-container'>
      {gen3}
    </div>
  )
}

export default Gen3

Gen3.propTypes = {
  addFavorite: PropTypes.func.isRequired,
  gen3Pokemon: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  )
}
