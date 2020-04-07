import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const pokemonAPI = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {

  constructor () {
    super()

    this.state = {
      pokemons: [],
      filteredPokemons: []
    }
  };

  fetchPokemons = () => {
    fetch(pokemonAPI)
      .then(res => res.json())
      .then(pokemons => {
        this.setState({ pokemons })
      })
  };

  pokemonsFiltered = (pokemonName) => {
    let filteredPokemons = this.state.pokemons.filter(pokemon => pokemon.name.startsWith(pokemonName))
    this.setState({ filteredPokemons })
  };

  componentDidMount() {
    this.fetchPokemons();
  };

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onChange={this.pokemonsFiltered} />
        <br />
        <PokemonCollection pokemons={!this.state.filteredPokemons.length ? this.state.pokemons : this.state.filteredPokemons}/>
      </Container>
    )
  }
}

export default PokemonPage;
