import React, { Component } from 'react'
// import Main from '../Main/Main'
import Nav from '../Nav/Nav'
import './App.css'
import { getPokemonByGeneration, getSinglePokemon } from '../APIcalls'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      singlePokemon: null,
      gen1Pokemon: null,
      gen2Pokemon: null,
      gen3Pokemon: null,
      gen4Pokemon: null,
      gen5Pokemon: null,
      gen6Pokemon: null,
      gen7Pokemon: null,
      gen8Pokemon: null,
      favoritedPokemon: null,
      isError: false,
      errorMsg: ''
    }
  }

  componentDidMount() {
    getPokemonByGeneration('1')
      .then((res) => {
        if (!res.ok) {
          this.setState({
            isError: true,
            errorMsg: 'Server Error, something went wrong'
          })
        } else {
          return res.json()
        }
      })
      .then((data) => {
        let formattedPokemon = data.pokemon_species.map(pokemon => {
          let id = pokemon.url.slice(42, -1)
          let pokemonId = {
            ...pokemon, id: id
          }
          return pokemonId
        })
        this.setState({gen1Pokemon: formattedPokemon})
        })

    getPokemonByGeneration('2')
      .then((res) => {
        if (!res.ok) {
          this.setState({
            isError: true,
            errorMsg: 'Server Error, something went wrong'
          })
        } else {
          return res.json()
        }
      })
      .then((data) => {
        let formattedPokemon = data.pokemon_species.map(pokemon => {
          let id = pokemon.url.slice(42, -1)
          let pokemonId = {
            ...pokemon, id: id
          }
          return pokemonId
        })
        this.setState({gen2Pokemon: formattedPokemon})
        })
    getPokemonByGeneration('3')
      .then((res) => {
        if (!res.ok) {
          this.setState({
            isError: true,
            errorMsg: 'Server Error, something went wrong'
          })
        } else {
          return res.json()
        }
      })
      .then((data) => {
        let formattedPokemon = data.pokemon_species.map(pokemon => {
          let id = pokemon.url.slice(42, -1)
          let pokemonId = {
            ...pokemon, id: id
          }
          return pokemonId
        })
        this.setState({gen3Pokemon: formattedPokemon})
        })
    getPokemonByGeneration('4')
      .then((res) => {
        if (!res.ok) {
          this.setState({
            isError: true,
            errorMsg: 'Server Error, something went wrong'
          })
        } else {
          return res.json()
        }
      })
      .then((data) => {
        let formattedPokemon = data.pokemon_species.map(pokemon => {
          let id = pokemon.url.slice(42, -1)
          let pokemonId = {
            ...pokemon, id: id
          }
          return pokemonId
        })
        this.setState({gen4Pokemon: formattedPokemon})
        })
    getPokemonByGeneration('5')
      .then((res) => {
        if (!res.ok) {
          this.setState({
            isError: true,
            errorMsg: 'Server Error, something went wrong'
          })
        } else {
          return res.json()
        }
      })
      .then((data) => {
        this.setState({gen5Pokemon: data.pokemon_species})
      })
    getPokemonByGeneration('6')
      .then((res) => {
        if (!res.ok) {
          this.setState({
            isError: true,
            errorMsg: 'Server Error, something went wrong'
          })
        } else {
          return res.json()
        }
      })
      .then((data) => {
        let formattedPokemon = data.pokemon_species.map(pokemon => {
          let id = pokemon.url.slice(42, -1)
          let pokemonId = {
            ...pokemon, id: id
          }
          return pokemonId
        })
        this.setState({gen6Pokemon: formattedPokemon})
        })
    getPokemonByGeneration('7')
      .then((res) => {
        if (!res.ok) {
          this.setState({
            isError: true,
            errorMsg: 'Server Error, something went wrong'
          })
        } else {
          return res.json()
        }
      })
      .then((data) => {
        let formattedPokemon = data.pokemon_species.map(pokemon => {
          let id = pokemon.url.slice(42, -1)
          let pokemonId = {
            ...pokemon, id: id
          }
          return pokemonId
        })
        this.setState({gen7Pokemon: formattedPokemon})
        })
    getPokemonByGeneration('8')
      .then((res) => {
        if (!res.ok) {
          this.setState({
            isError: true,
            errorMsg: 'Server Error, something went wrong'
          })
        } else {
          return res.json()
        }
      })
      .then((data) => {
        let formattedPokemon = data.pokemon_species.map(pokemon => {
          let id = pokemon.url.slice(42, -1)
          let pokemonId = {
            ...pokemon, id: id
          }
          return pokemonId
        })
        this.setState({gen8Pokemon: formattedPokemon})
        })
  }

  // findPokemon = (input) => {
  //
  // }

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
