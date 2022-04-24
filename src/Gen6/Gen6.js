import React from 'react'
import './Gen6.css'
import Gen6Info from './Gen6Info/Gen6Info'
import PropTypes from 'prop-types'

const Gen6 = ({ addFavorite, gen6Pokemon }) => {
  let gen6 = gen6Pokemon.map((pokemon) => {
    return (
      <Gen6Info
      name={pokemon.name}
      id={pokemon.id}
      key={pokemon.id}
      addFavorite={addFavorite}
      />
    )
  })
  return (
    <div className='cards-container'>
      {gen6}
    </div>
  )
}

export default Gen6

Gen6.propTypes = {
  addFavorite: PropTypes.func.isRequired,
  gen6Pokemon: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  )
}
