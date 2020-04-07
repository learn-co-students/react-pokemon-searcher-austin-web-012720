import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    isClicked: false
  }
  getHp = (prop)=>{
    const hp = prop.stats.find(s => s.name === 'hp').value || 50
    return hp
  }
  handleClick = (prop)=>{
    const url =  this.state.isClicked? prop.sprites.back : prop.sprites.front
    return url

  }
  handleClicks = ()=>{

    this.setState({isClicked: this.state.isClicked ? false : true })
    
  }
  render() {
    return (
      <Card>
        <div>
          <div
            onClick={this.handleClicks}
            className="image">
            <img
                src={this.handleClick(this.props.poke)}
                alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.getHp(this.props.poke)} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
