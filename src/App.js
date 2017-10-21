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
       * A "roster" object displaying all available players' emails as
       * properties and their information as values.
       * @type {Object}
       */
      availablePlayers: null,
      /**
       * Whether the app is currently attempting to resolve promises to fetch
       * data.
       * @type {Boolean}
       */
      isLoading: true,
      /**
       * The list of players that are being rendered in the main view.
       * @type {Array}
       */
      roster: []
    }
  }

  /**
   * Gets all the players from the database.
   * @method getAvailablePlayers
   * @return {Promise} - A promise displaying the status and data of request.
   */
  async getAvailablePlayers(requestURL) {
    try {
      const response = await fetch(requestURL)
      return response.json()
    } catch (error) {
      throw Error(error)
    }
  }

  /**
   * Called during React's `mounted` lifecycle hook.
   * @method componentDidMount
   * @return {Void}
   */
  async componentDidMount() {
    // get available players
    const availablePlayers = await this.getAvailablePlayers(API_ENDPOINT)

    // update state with fetched available players
    this.setState({ availablePlayers, isLoading: false })
  }

  /**
   * Adds a new player to the roster of players being rendered in a list.
   * @method addPlayer
   */
  addPlayer = (playerEmailInput) => {
    // make sure the email exists in store
    if (!this.state.availablePlayers[playerEmailInput]) return

    // obtain player with specified email
    const playerToAdd = this.state.availablePlayers[playerEmailInput]

    this.setState(prevState => ({
      // push a new element to the array of players
      roster: [...prevState.roster, playerToAdd]
    }))
  }

  render() {
    // indicate app is loading and resolving promises from asynchronous calls.
    if (this.state.isLoading) return <Loading />

    return (
      <div className="App">
        <PlayerList players={this.state.roster} />
        <AddPlayersInput onAddPlayer={this.addPlayer} />
      </div>
    );
  }
}

export default App;
