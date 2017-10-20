import React from 'react'

import UserInfo from './UserInfo'

const PlayerCard = ({ player }) => (
  <li>
    <UserInfo fullName={player.firstName + player.lastName} />
  </li>
)

export default PlayerCard
