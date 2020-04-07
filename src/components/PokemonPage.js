import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searchTerm: ''
  }

  filterPokemon = event => {
   let name = event.target.value.toLowerCase()
   this.setState({searchTerm: name})
  }

  componentDidMount() {
   this.fetchPokemon()
  }

  fetchPokemon = () => {
    fetch('http://localhost:3000/pokemon')
    .then(response => response.json())
    .then(results => {
      this.setState({ pokemons: results})
    })
  }

  addPokemonToPokemons = (pokemon) => {
    this.setState({pokemons: [...this.state.pokemons, pokemon]})
  }

  render() {
    const pokemonsToFind = this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.searchTerm))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemonToPokemons}/>
        <br />
        <Search onChange={this.filterPokemon} />
        <br />
        <PokemonCollection pokemons={pokemonsToFind} />
      </Container>
    )
  }
}

export default PokemonPage
