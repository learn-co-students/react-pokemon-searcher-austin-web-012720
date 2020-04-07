import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    front: true,
  };

  handleToggle = () => {
    this.setState({ front: !this.state.front });
  };

  render() {
    return (
      <Card>
        <div>
          <div onClick={this.handleToggle} className="image">
            {this.state.front ? (
              <img src={this.props.pokemon.sprites.front} alt="oh no!" />
            ) : (
              <img src={this.props.pokemon.sprites.back} alt="oh no!" />
            )}
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {
                this.props.pokemon.stats.find((stat) => stat.name === "hp")
                  .value
              }
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
