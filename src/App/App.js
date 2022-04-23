import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Main from '../Main/Main'
import Nav from '../Nav/Nav'
import Gen1 from '../Gen1/Gen1'
import Gen2 from '../Gen2/Gen2'
import Gen3 from '../Gen3/Gen3'
import Gen4 from '../Gen4/Gen4'
import Gen5 from '../Gen5/Gen5'
import Gen6 from '../Gen6/Gen6'
import Gen7 from '../Gen7/Gen7'
import Gen8 from '../Gen8/Gen8'
import './App.css'
import { getPokemonByGeneration } from '../APIcalls'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      gen1Pokemon: [],
      gen2Pokemon: [],
      gen3Pokemon: [],
      gen4Pokemon: [],
      gen5Pokemon: [],
      gen6Pokemon: [],
      gen7Pokemon: [],
      gen8Pokemon: [],
      favoritedPokemon: [],
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
        let formattedPokemon = data.pokemon_species.map(pokemon => {
          let id = pokemon.url.slice(42, -1)
          let pokemonId = {
            ...pokemon, id: id
          }
          return pokemonId
        })
        this.setState({gen5Pokemon: formattedPokemon})
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


  render() {
    return (
      <div className='whole-page'>
        <Nav />
        <Route exact path='/' render={() => {
          return <Main />
        }} />
        <Route exact path='/Gen1' render={() => {
          return (
            <Gen1 gen1Pokemon={this.state.gen1Pokemon} />
          )
        }} />
        <Route exact path='/Gen2' render={() => {
          return (
            <Gen2 gen2Pokemon={this.state.gen2Pokemon} />
          )
        }} />
        <Route exact path='/Gen3' render={() => {
          return (
            <Gen3 gen3Pokemon={this.state.gen3Pokemon} />
          )
        }} />
        <Route exact path='/Gen4' render={() => {
          return (
            <Gen4 gen4Pokemon={this.state.gen4Pokemon} />
          )
        }} />
        <Route exact path='/Gen5' render={() => {
          return (
            <Gen5 gen5Pokemon={this.state.gen5Pokemon} />
          )
        }} />
        <Route exact path='/Gen6' render={() => {
          return (
            <Gen6 gen6Pokemon={this.state.gen6Pokemon} />
          )
        }} />
        <Route exact path='/Gen7' render={() => {
          return (
            <Gen7 gen7Pokemon={this.state.gen7Pokemon} />
          )
        }} />
        <Route exact path='/Gen8' render={() => {
          return (
            <Gen8 gen8Pokemon={this.state.gen8Pokemon} />
          )
        }} />
      </div>
    )
  }
}



export default App;
