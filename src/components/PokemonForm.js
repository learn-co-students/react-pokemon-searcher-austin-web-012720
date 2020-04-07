import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }
  handleName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleHP = (event) => {
    this.setState({
      hp: event.target.value
    })
  }

  handleFrontURL = (event) => {
    this.setState({
      frontUrl: event.target.value
    })
  }

  handleBackURL = (event) => {
    this.setState({
      backUrl: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addPokemon(this.state);
    this.setState({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    });
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={this.handleName} value={this.state.name} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input onChange={this.handleHP} value={this.state.hp} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input onChange={this.handleFrontURL} value={this.state.frontUrl} fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input onChange={this.handleBackURL} value={this.state.backUrl} fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
