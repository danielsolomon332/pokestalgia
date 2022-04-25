import React from 'react'
import './Main.css'
import pokemon_starters from '../pokemon_starters.jpeg'

const Main = () => {
   return (
    <div className='main-section'>
      <div className='welcome-message'>
        <p>Welcome to Pokestalgia!</p>
        <p>The App created for older fans to relive their Pokestalgia and learn about new Pocket Monsters too!</p>
        <p>This App is also a place for newer fans to rediscover the older Pokemon generations!</p>
      </div>
      <div className='image-container'>
        <img className='pokemon-starters' src={pokemon_starters} alt="pokemon starters" />
      </div>
    </div>
 )
}

export default Main
