import React from 'react'

import UserCard from './UserCard'

const PlayerList = ({ players }) => (
  <ul>
    {
      players.map((player, index) => (
        <UserCard key={index} {...player} />
      ))
    }
  </ul>
)
