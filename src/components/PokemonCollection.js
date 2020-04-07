import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  createCards = () =>{
     return this.props.pokeDex.map((pokemon,key)=> <PokemonCard poke={pokemon} key={key}/>)
  }


  render() {
    return (
      <Card.Group itemsPerRow={6}>
        
        {this.createCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
