import React from 'react'
import './Gen7Info.css'
import { NavLink } from 'react-router-dom'

const Gen7Info = ({ name, id }) => {
  return (
    <div className="card">
      <p>Name: {name.charAt(0).toUpperCase() + name.slice(1)}</p>
      <p>Pokedex #: {id}</p>
      <a href={`https:bulbapedia.bulbagarden.net/wiki/${name}_(Pok%C3%A9mon)`} target="_blank" rel="noreferrer">{name.charAt(0).toUpperCase() + name.slice(1)} Info Link</a>
      <div className='favorite-button'>
        <button className='favorite-button'>Favorite</button>
      </div>
    </div>
  )
}

export default Gen7Info
