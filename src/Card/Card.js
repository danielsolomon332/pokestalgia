import React from 'react'
import './Card.css'

const Card = () => {
  <div className="card">
    <p>Name: {}</p>
    <p>Pokedex #: {}</p>
    <p>Bulbapedia Link:</p>
    <a href=`https:bulbapedia.bulbagarden.net/wiki/${}_(Pok%C3%A9mon)`>
    <div className='favorite-button'>
      <button className='favorite-button' onClick={() => saveFavoritePokemon()}>Favorite</button>
    </div>
  </div>
}
