import React from 'react'

import UserCard from './UserCard'

const PlayerList = ({ players }) => (
  <ul>
    {
      players ? Object.keys(players).map((player, index) => (
        <UserCard key={index} player={players[player]} />
      )) : <p>none</p>
    }
  </ul>
)

export default PlayerList
