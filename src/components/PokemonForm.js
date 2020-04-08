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

  onFormChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    console.log(e.target.name, e.target.value)
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    const poke = {
      name: this.state.name,
      stats: [{ value: this.state.hp, name: 'hp' }],
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl
      }
    }

    fetch("http://localhost:3000/pokemon", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(poke)
    })
    this.props.addPokemon(poke);
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid onChange={this.onFormChange} label="Name" placeholder="Name" name="name" />
            <Form.Input fluid onChange={this.onFormChange} label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid onChange={this.onFormChange} label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid onChange={this.onFormChange} label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
