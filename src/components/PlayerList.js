import React from 'react'

import PlayerCard from './PlayerCard'
import NoPlayers from './NoPlayers'

/**
 * A presentational component that simply renders a list of all the available
 * players.
 * @method PlayerList
 * @param  {Object} players - A "roster" of players.
 */
const PlayerList = ({ players }) => {
  // handle cases where players is undefined or null
  if (!players) {
    return <NoPlayers />
  }

  /**
   * A PlayerCard for every player, with its respective data passed as props.
   * @type {Object}
   */
  const playerCards = Object.keys(players).map((player, index) => (
    <PlayerCard key={index} player={players[player]} /> ))

  return (
    // list out all the players and their cards
    <ul>
      {playerCards}
    </ul>
  )
}

export default PlayerList
