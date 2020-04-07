import React from 'react';
import { Card } from 'semantic-ui-react';

class PokemonCard extends React.Component {
  constructor() {
    super();
    this.state = {
      flipped: false,
    };
  }

  render() {
    const poke = this.props.pokemon;

    return (
      <Card>
        <div onClick={() => this.setState({ flipped: !this.state.flipped })}>
          <div className="image">
            <img
              alt="oh no!"
              src={this.state.flipped ? poke.sprites.back : poke.sprites.front}
            />
          </div>
          <div className="content">
            <div className="header">{poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {poke.stats.find((stat) => stat.name === 'hp').value} hp
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
