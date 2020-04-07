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
  inputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = e =>{
    const int = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    };
    e.preventDefault();
    const {name, hp, frontUrl, backUrl }= this.state
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
        body: JSON.stringify({
          name,
          stats: [
          {
            value: hp,
            name: 'hp'
          }
        ],
        sprites:{
          front:frontUrl,
          back: backUrl
        }
      })
    })
    .then(resp=> resp.json())
    .then(pokemon=> this.props.addPoke(pokemon))
    .catch(error => console.log(error))
    this.setState(int)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={this.inputChange} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input onChange={this.inputChange} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input onChange={this.inputChange} fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input onChange={this.inputChange} fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
