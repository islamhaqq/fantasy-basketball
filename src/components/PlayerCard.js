import React from 'react'

import PlayerInfo from './PlayerInfo'

const PlayerCard = ({ player }) => (
  <li>
    <PlayerInfo fullName={player.firstName + player.lastName} />
  </li>
)

export default PlayerCard
