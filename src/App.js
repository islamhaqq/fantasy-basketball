import React, { Component } from 'react';
import fetch from 'isomorphic-fetch'

import PlayerList from './components/PlayerList'
import AddPlayersInput from './containers/AddPlayersInput'
import Loading from './components/Loading'

import './App.css';

/**
 * URL of where the data can be fetched.
 * @type {String}
 */
const API_ENDPOINT = 'https://demo5689530.mockable.io/public/players'

/**
 * The root component. All other components are children.
 * @type {Object}
 */
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      /**
       * A "roster" object displaying all players' emails as properties and
       * their information as values.
       * @type {Object}
       */
      players: null,
      /**
       * Whether the app is currently attempting to resolve promises to fetch
       * data.
       * @type {Boolean}
       */
      isLoading: true,
      /**
       * The list of players that is being rendered in the main view.
       * @type {Array}
       */
      addedPlayers: []
    }
  }

  /**
   * Called during React's `mounted` lifecycle hook.
   * @method componentDidMount
   * @return {Promise}         [description]
   */
  async componentDidMount() {
    // get players
    const players = await this.getPlayers(API_ENDPOINT)

    // update state with fetched players
    this.setState({ players, isLoading: false })
  }

  /**
   * Gets all the players from the database.
   * @method getPlayers
   * @return {Promise} - A promise displaying the status and data of request.
   */
  async getPlayers(requestURL) {
    try {
      const response = await fetch(requestURL)
      return response.json()
    } catch (error) {
      throw Error(error)
    }
  }

  /**
   * Adds a new player to the list of players already being rendered.
   * @method addPlayer
   */
  addPlayer = (playerEmailInput) => {
    // make sure the email exists in store
    if (!this.state.players[playerEmailInput]) return

    // obtain player with specified email
    const playerToAdd = this.state.players[playerEmailInput]

    this.setState(prevState => ({
      // push a new element to the array of players
      addedPlayers: [...prevState.addedPlayers, playerToAdd]
    }))
  }

  render() {
    // indicate app is loading and resolving promises from asynchronous calls.
    if (this.state.isLoading) return <Loading />

    return (
      <div className="App">
        <PlayerList players={this.state.players} />
        <AddPlayersInput onAddPlayer={this.addPlayer} />
      </div>
    );
  }
}

export default App;
