import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Main from '../Main/Main'
import Nav from '../Nav/Nav'
import Favorites from '../Favorites/Favorites'
import Gen1 from '../Gen1/Gen1'
import Gen2 from '../Gen2/Gen2'
import Gen3 from '../Gen3/Gen3'
import Gen4 from '../Gen4/Gen4'
import Gen5 from '../Gen5/Gen5'
import Gen6 from '../Gen6/Gen6'
import Gen7 from '../Gen7/Gen7'
import Gen8 from '../Gen8/Gen8'
import './App.css'
import { getPokemonByGeneration, getAllPokemon } from '../APIcalls'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      allPokemon: [],
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
    }
  }

  addFavorite = (id) => {
    const favoritePokemon = this.state.allPokemon.find(pokemon => pokemon.id === id)
    this.setState({ favoritedPokemon: [...this.state.favoritedPokemon, favoritePokemon] })
  }

  removeFavorite = (id) => {
    const filteredPokemon = this.state.favoritedPokemon.filter(pokemon => pokemon.id !== id)
    this.setState({ favoritedPokemon: filteredPokemon })
  }

  componentDidMount() {
    getAllPokemon()
      .then((res) => {
        if (!res.ok) {
          this.setState({
            isError: true
          })
        } else {
          return res.json()
        }
      })
      .then((data) => {
        let formattedPokemon = data.results.map(pokemon => {
          let id = pokemon.url.slice(34, -1)
          let pokemonId = {
            ...pokemon, id: id
          }
          return pokemonId
        })
        this.setState({allPokemon: formattedPokemon})
        })
        .catch(() => this.setState({isError: true}))
    getPokemonByGeneration('1')
      .then((res) => {
        if (!res.ok) {
          this.setState({
            isError: true
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
        }).sort((pokemon1, pokemon2) => pokemon1.id - pokemon2.id)
        this.setState({gen1Pokemon: formattedPokemon})
        })
        .catch(() => this.setState({isError: true}))
    getPokemonByGeneration('2')
      .then((res) => {
        if (!res.ok) {
          this.setState({
            isError: true
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
        }).sort((pokemon1, pokemon2) => pokemon1.id - pokemon2.id)
        this.setState({gen2Pokemon: formattedPokemon})
        })
        .catch(() => this.setState({isError: true}))
    getPokemonByGeneration('3')
      .then((res) => {
        if (!res.ok) {
          this.setState({
            isError: true
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
        }).sort((pokemon1, pokemon2) => pokemon1.id - pokemon2.id)
        this.setState({gen3Pokemon: formattedPokemon})
        })
        .catch(() => this.setState({isError: true}))
    getPokemonByGeneration('4')
      .then((res) => {
        if (!res.ok) {
          this.setState({
            isError: true
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
        }).sort((pokemon1, pokemon2) => pokemon1.id - pokemon2.id)
        this.setState({gen4Pokemon: formattedPokemon})
        })
        .catch(() => this.setState({isError: true}))
    getPokemonByGeneration('5')
      .then((res) => {
        if (!res.ok) {
          this.setState({
            isError: true
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
        }).sort((pokemon1, pokemon2) => pokemon1.id - pokemon2.id)
        this.setState({gen5Pokemon: formattedPokemon})
      })
      .catch(() => this.setState({isError: true}))
    getPokemonByGeneration('6')
      .then((res) => {
        if (!res.ok) {
          this.setState({
            isError: true
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
        }).sort((pokemon1, pokemon2) => pokemon1.id - pokemon2.id)
        this.setState({gen6Pokemon: formattedPokemon})
        })
        .catch(() => this.setState({isError: true}))
    getPokemonByGeneration('7')
      .then((res) => {
        if (!res.ok) {
          this.setState({
            isError: true
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
        }).sort((pokemon1, pokemon2) => pokemon1.id - pokemon2.id)
        this.setState({gen7Pokemon: formattedPokemon})
        })
        .catch(() => this.setState({isError: true}))
    getPokemonByGeneration('8')
      .then((res) => {
        if (!res.ok) {
          this.setState({
            isError: true
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
        }).sort((pokemon1, pokemon2) => pokemon1.id - pokemon2.id)
        this.setState({gen8Pokemon: formattedPokemon})
        })
        .catch(() => this.setState({isError: true}))
  }


  render() {
    return (
      <div>
        <Nav />
        <div className='loading-error-message'>
            {this.state.isError ? <h2>Something went wrong! Send complaints to Scott and Robbie</h2> :

        <Route exact path='/' render={() => {
          return <Main />
        }} /> }
        </div>
        <Route exact path='/Favorites' render={() => {
          return <Favorites favoritedPokemon={this.state.favoritedPokemon} removeFavorite={this.removeFavorite} />
        }} />
        <Route exact path='/Gen1' render={() => {
          return (
            <Gen1 gen1Pokemon={this.state.gen1Pokemon} addFavorite={this.addFavorite} />
          )
        }} />
        <Route exact path='/Gen2' render={() => {
          return (
            <Gen2 gen2Pokemon={this.state.gen2Pokemon} addFavorite={this.addFavorite} />
          )
        }} />
        <Route exact path='/Gen3' render={() => {
          return (
            <Gen3 gen3Pokemon={this.state.gen3Pokemon} addFavorite={this.addFavorite} />
          )
        }} />
        <Route exact path='/Gen4' render={() => {
          return (
            <Gen4 gen4Pokemon={this.state.gen4Pokemon} addFavorite={this.addFavorite} />
          )
        }} />
        <Route exact path='/Gen5' render={() => {
          return (
            <Gen5 gen5Pokemon={this.state.gen5Pokemon} addFavorite={this.addFavorite} />
          )
        }} />
        <Route exact path='/Gen6' render={() => {
          return (
            <Gen6 gen6Pokemon={this.state.gen6Pokemon} addFavorite={this.addFavorite} />
          )
        }} />
        <Route exact path='/Gen7' render={() => {
          return (
            <Gen7 gen7Pokemon={this.state.gen7Pokemon} addFavorite={this.addFavorite} />
          )
        }} />
        <Route exact path='/Gen8' render={() => {
          return (
            <Gen8 gen8Pokemon={this.state.gen8Pokemon} addFavorite={this.addFavorite} />
          )
        }} />
      </div>
    )
  }
}



export default App;
