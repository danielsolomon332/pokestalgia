import React, { Component } from 'react'

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
        <h1>Welcome to Pokestalgia!</h1>
        <p>The App for old fans to discover new pokemon and where newer fans can rediscover older pokemon!</p>
      </div>
    )
  }
}

export default App;
