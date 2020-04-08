import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    clicked: false,
  };

  handleClick = (event) => {
    console.log("Image clicked...");
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    return (
      <Card>
        <div>
          <div className="image" onClick={this.handleClick}>
            {this.state.clicked ? (
              <img src={this.props.pokemon.sprites.back} alt="Pokemon Front!" />
            ) : (
              <img src={this.props.pokemon.sprites.front} alt="Pokemon Back!" />
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
              }{" "}
              hp
            </span>
            <div className="Type">
              Type: {this.props.pokemon.types.join(", ")}
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
