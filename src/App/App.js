import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import Card from '../Card/Card'
import Favorites from '../Favorites/Favorites'
import GenX from '../GenX/GenX'
import { fetchDataGet } from '../APICalls'
import './App.css'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      singlePokemon: {
        name: '',
        pokedexNumber: null,
        bulbapediaLink: null
      },
      genXPokemon: [],
      favoritedPokemon: [],
      errorMsg: '',
    }
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default App;
