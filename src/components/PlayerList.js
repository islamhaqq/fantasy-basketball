import React from 'react'

import PlayerCard from './PlayerCard'

const PlayerList = ({ players }) => (
  <ul>
    {
      players ? Object.keys(players).map((player, index) => (
        <PlayerCard key={index} player={players[player]} />
      )) : <p>none</p>
    }
  </ul>
)

export default PlayerList
