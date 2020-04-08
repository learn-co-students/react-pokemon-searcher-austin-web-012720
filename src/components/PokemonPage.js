import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    search: ''
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(data => {
      this.setState({
        pokemon: data
      })
    })
  }

  addPokemon = (poke) => {
    this.setState({
      pokemon: [...this.state.pokemon, poke]
    })

  }

  onChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={this.onChange} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon.filter((poke) => poke.name.includes(this.state.search))}/>
      </Container>
    )
  }
}

export default PokemonPage
