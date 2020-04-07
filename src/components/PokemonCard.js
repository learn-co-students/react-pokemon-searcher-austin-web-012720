import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor() {
    super()
    this.state = {
      side: true
    }
  }

  handleClick = () => {
    this.setState(prevState => {
      return {
        side: !prevState.side
      }
    })
  }

  render() {
    const hp = this.props.pokemonData.stats.find(s => s.name === 'hp').value || 50
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img alt="oh no!" src={
              this.state.side ? 
              this.props.pokemonData.sprites.front : this.props.pokemonData.sprites.back
              } />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemonData.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
