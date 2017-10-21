import React, { Component } from 'react'

/**
 * A component that allows users to input player emails to add player cards.
 * @type {Object}
 */
class AddPlayersInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playerEmailInput: '',
      players: []
    }
  }

  /**
   * Updates the state representing what the user enters in the input field.
   * @method updatePlayerEmailInput
   * @param  {Object} event - The native DOM input change event.
   * @return {Void}
   */
  updatePlayerEmailInput = (event) => {
    this.setState({ playerEmailInput: event.target.value })
  }

  /**
   * Adds a new player to the list of players already being rendered.
   * @method addPlayer
   * @param  {Object} event - The native DOM click event.
   */
  addPlayer = (event) => {
    this.setState(prevState => ({
      // push a new element to the array of players
      players: [...prevState.players, this.state.playerEmailInput],
      // clear the input
      playerEmailInput: ''
    }))
  }

  render () {
    return (
      <div>
        <input
          value={this.state.playerEmailInput} onChange={this.updatePlayerEmailInput}
        />
        <button onClick={this.addPlayer}>Add Player</button>
      </div>
    )
  }
}

export default AddPlayersInput
