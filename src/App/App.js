import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
// import Main from '../Main/Main'
import Nav from '../Nav/Nav'
import Gen1 from '../Gen1/Gen1'
import Gen2 from '../Gen2/Gen2'
import './App.css'
import { getPokemonByGeneration, getSinglePokemon } from '../APIcalls'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      singlePokemon: null,
      gen1Pokemon: [],
      gen2Pokemon: [],
      gen3Pokemon: [],
      gen4Pokemon: [],
      gen5Pokemon: [],
      gen6Pokemon: [],
      gen7Pokemon: [],
      gen8Pokemon: [],
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
        <Route exact path='/' render={() => {
          return (
            <Gen1 gen1Pokemon={this.state.gen1Pokemon} />
          )
        }} />
        <Route exact path='/Gen2' render={() => {
          return (
            <Gen2 gen2Pokemon={this.state.gen2Pokemon} />
          )
        }} />
      </div>
    )
  }
}



export default App;
