import React, { Component } from 'react'

class AddPlayersInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playerEmailInput: ''
    }
  }

  /**
   * Updates the state representing what the user enters in the input field.
   * @method updatePlayerEmailInput
   * @param  {Object} event - The input change event.
   * @return {Void}
   */
  updatePlayerEmailInput = (event) => {
    this.setState({ playerEmailInput: event.target.value })
  }

  render () {
    return (
      <input
        value={this.state.playerEmailInput} onChange={this.updatePlayerEmailInput}
      />
    )
  }
}

export default AddPlayersInput
