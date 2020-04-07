import React from 'react';
import PokemonCollection from './PokemonCollection';
import PokemonForm from './PokemonForm';
import Search from './Search';
import { Container } from 'semantic-ui-react';

const API_URL = 'http://localhost:3000/pokemon';
const sorts = {
  id: (a, b) => a.id - b.id,
  name: (a, b) => a.name.localeCompare(b.name),
  hp: (a, b) =>
    a.stats.find((e) => e.name === 'hp').value -
    b.stats.find((e) => e.name === 'hp').value,
  nameReverse: (a, b) => b.name.localeCompare(a.name),
};

class PokemonPage extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      searchOn: '',
      sortOn: '',
    };
  }

  componentDidMount() {
    fetch(API_URL)
      .then((res) => res.json())
      .then((pokemon) => this.setState({ pokemon }));
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm
          addPokemon={(poke) =>
            this.setState({ pokemon: [...this.state.pokemon, poke] })
          }
        />
        <br />
        <Search
          onSearch={(e) => this.setState({ searchOn: e.target.value })}
          onSort={(e) => this.setState({ sortOn: e.target.value })}
        />
        <br />
        <PokemonCollection
          pokemon={this.state.pokemon
            .filter((poke) => poke.name.includes(this.state.searchOn))
            .sort(sorts[this.state.sortOn])}
        />
      </Container>
    );
  }
}

export default PokemonPage;
