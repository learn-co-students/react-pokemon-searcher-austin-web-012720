import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor() {
    super()

    this.state = {
      flipped: false
    }
  }

  // handleClick = () => {
  //   if (this.state.flipped === false) {
  //     this.setState({
  //       flipped: true
  //     })
  //   } else {
  //     this.setState({
  //       flipped: false
  //     })
  //   }
  // }

  render() {
    const poke = this.props.poke

    return (
      <Card>
        <div>
          {/* <div className="image" onClick={this.handleClick}> */}
          <div className="image" onClick={() => this.setState({flipped: !this.state.flipped})}>
            <img src={this.state.flipped ? poke.sprites.back : poke.sprites.front} alt="oh no!" />
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
    )
  }
}

export default PokemonCard
