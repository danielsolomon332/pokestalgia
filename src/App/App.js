import React, { Component } from 'react'
// import Main from '../Main/Main'
import Nav from '../Nav/Nav'
import './App.css'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      allPokemon: [],
      singlePokemon: null,
      genXPokemon: [],
      favoritedPokemon: [],
      errorMsg: '',
    }
  }

  findPokemon = (input) => {

  }

  render() {
    return (
      <div>
        <Nav />
        <main>
          <h1>Welcome to Pokestalgia!</h1>
          <p>The App for old fans to discover new pokemon and where newer fans can rediscover older pokemon!</p>
        </main>
      </div>
    )
  }
}

export default App;
