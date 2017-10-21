import React, { Component } from 'react';
import fetch from 'isomorphic-fetch'

import PlayerList from './components/PlayerList'
import AddPlayersInput from './containers/AddPlayersInput'
import NoPlayers from './components/NoPlayers'
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
      isLoading: true
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

  render() {
    if (this.state.isLoading) return <Loading />

    return (
      <div className="App">
        {/* handle cases where players is undefined or null */}
        {this.state.players ? <PlayerList players={this.state.players} /> : <NoPlayers />}

        <AddPlayersInput />
      </div>
    );
  }
}

export default App;
