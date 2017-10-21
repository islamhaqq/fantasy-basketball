import React from 'react'

import PlayerCard from './PlayerCard'

/**
 * A presentational component that simply renders a list of all the available
 * players.
 * @method PlayerList
 * @param  {Object} players - A "roster" of players.
 */
const PlayerList = ({ players }) => (
  <ul>
    {
      // create a PlayerCard for every player, passing its respective data.
      players ? Object.keys(players).map((player, index) => (
        <PlayerCard key={index} player={players[player]} />
      )) : <p>none</p>
    }
  </ul>
)

export default PlayerList
