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
       * All the players.
       * @type {Object}
       */
      allPlayers: null,
      /**
       * A array displaying all available players' emails as properties and
       * their information as values.
       * @type {Array}
       */
      freeAgents: [],
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
   * @method getAllPlayers
   * @return {Promise} - A promise displaying the status and data of request.
   */
  async getAllPlayers(requestURL) {
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
    // get all the players
    const allPlayers = await this.getAllPlayers(API_ENDPOINT)

    // initially make all players free agents
    // make data easier to work with (array of objects with email property)
    const freeAgents = []
    Object.keys(allPlayers).map((playerEmail) => {
      let agentToAdd = allPlayers[playerEmail]
      // add in an email property
      agentToAdd.email = playerEmail

      freeAgents.push(agentToAdd)
    })

    // update state with fetched available players
    this.setState({ allPlayers, freeAgents, isLoading: false })
  }

  /**
   * Adds a new player to the roster of players being rendered in a list.
   * @method addPlayer
   */
  addPlayer = (playerEmailInput) => {
    // make sure the email and agent is available for a sign up
    if (!this.state.freeAgents.some((freeAgent) => {
      return freeAgent.email === playerEmailInput
    })) return // TODO: maybe display error

    // obtain player with specified email
    const playerToAdd = this.state.freeAgents.find((freeAgent) => {
      return freeAgent.email === playerEmailInput
    })

    // remove the player from free agents and add to the roster
    this.setState(prevState => {
      // remove free agent since he has now joined a franchise/club
      const freeAgents = this.state.freeAgents
      freeAgents.splice(freeAgents.indexOf(playerToAdd), 1)

      return {
        // push a new element to the array of players
        roster: [...prevState.roster, playerToAdd],
        freeAgents
      }
    })
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
