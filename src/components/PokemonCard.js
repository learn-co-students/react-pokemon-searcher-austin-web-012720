import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor() {
    super()

    this.state = {
      flipped: false
    }
  };

  flipCard = () => {
    this.setState({ flipped: !this.state.flipped })
  };

  render() {
    const poke = this.props.pokemon;
    return (
      <Card>
        <div>
          <div className="image" onClick={this.flipCard}>
            <img src={this.state.flipped ? poke.sprites.back : poke.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{poke.name}</div>
          </div>
          <div className="extra content">
            <div>
              <i className="icon heartbeat red" />
              {poke.stats.find(stat => stat.name === 'hp').value}
            </div>
            <div>
              Types: 
            </div>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
