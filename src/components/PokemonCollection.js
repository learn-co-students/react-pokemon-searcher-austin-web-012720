import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  mapPokemon = (pokemons) => {
    return pokemons.map(pokemon => (
      <PokemonCard key={pokemon.id} pokemon={pokemon} />
    ))
  };

  render() {
    return (
      <div>
        <h1>Hello From Pokemon Collection</h1>
        <Card.Group itemsPerRow={7}>
          {this.mapPokemon(this.props.pokemons)}
        </Card.Group>
      </div>
    )
  }
}

export default PokemonCollection
