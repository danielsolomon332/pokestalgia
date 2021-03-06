import React from 'react'
import './Gen6Info.css'
import PropTypes from 'prop-types'

const Gen6Info = ({ addFavorite, name, id }) => {
  return (
    <div className="card">
      <p className='name'>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
      <p className='pokedex'>Pokedex #: {id}</p>
      <a className='bulbapedia-link' href={`https:bulbapedia.bulbagarden.net/wiki/${name}_(Pok%C3%A9mon)`} target="_blank" rel="noreferrer">{name.charAt(0).toUpperCase() + name.slice(1)} Info Link</a>
      <div className='favorite-button'>
        <button className='add-favorite' onClick={() => addFavorite(id)}>Favorite</button>
      </div>
    </div>
  )
}

export default Gen6Info

Gen6Info.propTypes = {
  addFavorite: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
}
