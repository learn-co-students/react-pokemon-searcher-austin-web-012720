import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    search:''
  }
  handleSearchChange = event =>{
    this.setState({search: event.target.value })
  }
  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(r=>r.json())
    .then(data=>{

      this.setState({
        pokemon: data
      })
    })
  }
  addPoke = pokemon => {
    this.setState({pokemon: [...this.state.pokemon, pokemon]})
  }
  render() {
    const searchedPokemon = this.state.pokemon.filter(p=>
    p.name.includes(this.state.search)
  )
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPoke={this.addPoke}/>
        <br />
        <Search onChange={this.handleSearchChange } />
        <br />
        <PokemonCollection pokeDex={searchedPokemon} />
      </Container>
    )
  }
}

export default PokemonPage
