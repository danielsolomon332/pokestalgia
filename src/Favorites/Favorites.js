import React from 'react'
import './Favorites.css'
import FavoritesInfo from './FavoritesInfo/FavoritesInfo'
import PropTypes from 'prop-types'

const Favorites = ({ removeFavorite, favoritedPokemon }) => {
  let favorites = favoritedPokemon.map((pokemon) => {
    return (
      <FavoritesInfo
      name={pokemon.name}
      id={pokemon.id}
      key={pokemon.id}
      removeFavorite={removeFavorite}
      />
    )
  })
  return (
    <div>
      {!favoritedPokemon.length && <div className="add-container">
           <h2>Add Some of Your Favorite Pokemon!</h2>
        </div>}
      <div className='cards-container'>
        {favorites}
      </div>
    </div>
  )
}

export default Favorites

Favorites.propTypes = {
  removeFavorite: PropTypes.func.isRequired,
  favoritedPokemon: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired    
    })
  )
}
