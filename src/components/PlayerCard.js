import React from 'react'

import PlayerInfo from './PlayerInfo'
import PlayerProfilePhoto from './PlayerProfilePhoto'

/**
 * A presentational component that displays all of the player's info in a card.
 * @method PlayerCard
 * @param  {Object} player - The player's information. i.e. email, name...
 */
const PlayerCard = ({ player }) => (
  <li>
    <PlayerProfilePhoto profilePhotoSrc={player.photo} />
    <PlayerInfo fullName={player.firstName + player.lastName} />
  </li>
)

export default PlayerCard
