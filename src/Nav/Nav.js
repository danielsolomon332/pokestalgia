import React, { Component } from 'react'
import './Nav.css'

export class Nav extends Component {
  constructor() {
    super()
    this.state = {
      searchValue: ''
    }
  }

  handleTextInput = (event) => {
      this.setState({ searchValue: event.target.value }, () =>
        this.props.findPokemon(this.state.searchValue)
      )
    }

  render() {
    return (
      <nav>
        <h1 className='title'>Pokestalgia</h1>
        <input
          className='search'
          type='text'
          name='search'
          value={this.state.searchValue}
          placeholder='search for a pokemon by name'
          onChange={this.handleTextInput}
        />
        <button className='random-button' id='randomButton'>Random Pokemon</button>
        <button className='favorite-button' id='favoriteButton'>Favorite Pokemon</button>
      </nav>
    )
  }
}

export default Nav
