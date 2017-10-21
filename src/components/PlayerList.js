import React from 'react'

import PlayerCard from './PlayerCard'
import NoPlayers from './NoPlayers'

/**
 * A presentational component that simply renders a list of all the available
 * players.
 * @method PlayerList
 * @param  {Array} players - The user's fantasy roster of players.
 */
const PlayerList = ({ players }) => {
  // indicate the user has not added any players yet, or has deleted them all.
  if (players.length === 0) {
    return <NoPlayers />
  }

  /**
   * A PlayerCard for every player, with its respective data passed as props.
   * @type {Array}
   */
  const playerCards = players.map((player, index) => (
    <PlayerCard key={index} player={player} /> ))

  return (
    // list out all the players and their cards
    <ul>
      {playerCards}
    </ul>
  )
}

export default PlayerList
