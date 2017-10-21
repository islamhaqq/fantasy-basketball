import React from 'react'

import PlayerInfo from './PlayerInfo'
import PlayerProfilePhoto from './PlayerProfilePhoto'

/**
 * A presentational component that displays all of the player's info in a card.
 * @method PlayerCard
 * @param  {Object} player - The player's information. i.e. email, name...
 */
const PlayerCard = ({ player }) => {
  const fullName = `${player.firstName} ${player.lastName}`

  return (
    <li>
      <PlayerProfilePhoto profilePhotoSrc={player.photo} />
      <PlayerInfo fullName={fullName} />
    </li>
  )
}

export default PlayerCard
