import React, { Component } from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

export class Nav extends Component {
  constructor() {
    super()
    this.state = {
      searchValue: ''
    }
  }

  // handleTextInput = (event) => {
  //     this.setState({ searchValue: event.target.value }, () =>
  //       this.props.findPokemon(this.state.searchValue)
  //     )
  //   }

  render() {
    return (
      <nav>
        <h1 className='title'>Pokestalgia</h1>
        <div className='bottom-nav'>
          <NavLink to="/Gen1"><button className='gen-1-button' id='gen1Button'>Gen 1</button></NavLink>
          <NavLink to="/Gen2"><button className='gen-2-button' id='gen2Button'>Gen 2</button></NavLink>
          <NavLink to="/Gen3"><button className='gen-3-button' id='gen3Button'>Gen 3</button></NavLink>
          <NavLink to="/Gen4"><button className='gen-4-button' id='gen4Button'>Gen 4</button></NavLink>
          <NavLink to="/Gen5"><button className='gen-5-button' id='gen5Button'>Gen 5</button></NavLink>
          <NavLink to="/Gen6"><button className='gen-6-button' id='gen6Button'>Gen 6</button></NavLink>
          <NavLink to="/Gen7"><button className='gen-7-button' id='gen7Button'>Gen 7</button></NavLink>
          <NavLink to="/Gen8"><button className='gen-8-button' id='gen8Button'>Gen 8</button></NavLink>
        </div>
      </nav>
    )
  }
}

export default Nav
