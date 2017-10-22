import React from 'react'

import PlayerProfilePhoto from './PlayerProfilePhoto'
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

/**
 * A presentational component that displays all of the player's info in a card.
 * @method PlayerCard
 * @param  {Object} player - The player's information. i.e. email, name...
 */
const PlayerCard = ({ player }) => {
  /**
   * The player's full name.
   * @type {String}
   */
  const fullName = `${player.firstName} ${player.lastName}`

  return (
    <li>
      <Card>
        <CardMedia
          overlay={
            <CardTitle title={fullName} subtitle={player.email} />
          }
        >
          <PlayerProfilePhoto
            profilePhotoSrc={player.photo}
            fullName={fullName}
          />
        </CardMedia>
      </Card>
    </li>
  )
}

export default PlayerCard
