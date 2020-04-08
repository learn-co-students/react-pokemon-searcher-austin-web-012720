import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const URL = "http://localhost:3000/pokemon";

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searchWord: "",
  };

  componentDidMount() {
    this.fetchPokemon();
    console.log("Component did mount...");
  }

  fetchPokemon = () => {
    console.log("Fetching pokemon...");
    fetch(URL)
      .then((response) => response.json())
      .then((pokemons) => this.setState({ pokemons }));
    console.log("Pokemon were fetched...");
  };

  render() {
    console.log("Rendering PokemonPage...");
    console.log(this.state.pokemons);
    console.log(this.state.searchWord);
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm
          addPokemon={(poke) =>
            this.setState({ pokemeon: [...this.state.pokemons, poke] })
          }
        />
        <br />
        <Search
          onChange={(event) =>
            this.setState({ searchWord: event.target.value })
          }
        />
        <br />
        <PokemonCollection
          pokemons={this.state.pokemons.filter((pokemon) =>
            pokemon.name.includes(this.state.searchWord)
          )}
        />
      </Container>
    );
  }
}

export default PokemonPage;
