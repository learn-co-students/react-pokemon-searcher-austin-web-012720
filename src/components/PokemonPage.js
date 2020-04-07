import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const URL = 'http://localhost:3000/pokemon';

class PokemonPage extends React.Component {
  constructor() {
    super()
    this.state = {
      fetch: [],
      pokemons: [],
      search: ''
    }
  }

  componentDidMount() {
    fetch(URL)
    .then(resp => resp.json())
    .then(json => this.setState({
      fetch: json,
      pokemons: json
    })).catch(e => console.error(e));
  }

  search = (event) => {
    this.setState({
      search: event.target.value
    });
  }


  addPokemon = (pokemon) => {
    const newPokemon = {
      name: pokemon.name,
      stats: [
        {
          value: pokemon.hp,
          name: "hp"
        }
      ],
      sprites: {
        front: pokemon.frontUrl,
        back: pokemon.backUrl
      }
    }
    
    this.setState(prevState => {
      return {
        pokemons: [...prevState.pokemons, newPokemon]
      }
    });

    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        Accept:'application/json'
      },
      body: JSON.stringify(newPokemon)
    }

    fetch(URL, configObj);
  }

  render() {
    const desiredPokemon = this.state.pokemons.filter(p =>
      p.name.includes(this.state.search)
    )
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm pokemons={this.state.pokemons} addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={this.search} pokemons={this.state.pokemons} />
        <br />
        <PokemonCollection pokemons={desiredPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
