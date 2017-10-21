import React from 'react'

import PlayerInfo from './PlayerInfo'
import PlayerProfilePhoto from './PlayerProfilePhoto'

const PlayerCard = ({ player }) => (
  <li>
    <PlayerInfo fullName={player.firstName + player.lastName} />
    <PlayerProfilePhoto profilePhotoSrc={player.photo} />
  </li>
)

export default PlayerCard
