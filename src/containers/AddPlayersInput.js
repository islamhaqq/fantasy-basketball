import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { hirePlayer } from '../actions/index'

/**
 * A component that allows users to input player emails to add player cards.
 * @type {Object}
 */
class AddPlayersInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      /**
       * What the user is typing into the input field to add players.
       * @type {String}
       */
      playerEmailInput: ''
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
   */
  addPlayer = () => {
    // call back the passed prop function to send the parent componen the email
    // input the user has typed in
    this.props.onAddPlayer(this.state.playerEmailInput)

    // clear the input
    this.setState({ playerEmailInput: '' })
  }

  render () {
    return (
      <div>
        <TextField
          value={this.state.playerEmailInput} onChange={this.updatePlayerEmailInput}
          hintText="add a free agent to your roster"
        />
        <RaisedButton
          onClick={this.addPlayer}
          label="Add Player"
          primary={true}
        />
      </div>
    )
  }
}

/**
 * Converts the state of the container into usable props.
 * @method mapStateToProps
 * @param  {Object} state - The application state.
 * @return {Object} - Prop definitions wired to app state.
 */
function mapStateToProps(state) {
  return {
    playerEmailInput: state.playerEmailInput
  }
}

/**
 * Exposes actions as props for this container.
 * @method mapDispatchToProps
 * @param  {Object} dispatch - What connects the action results to the reducers.
 * @return {Object} - Bound action creators ready for connection to component.
 */
function mapDispatchToProps(dispatch) {
  // whenever hirePlayer() action is called, funnel result to reducers
  return bindActionCreators({ hirePlayer }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayersInput)
