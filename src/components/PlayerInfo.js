import React from 'react'

/**
 * A presentational component that displays a player's information.
 * @method PlayerInfo
 * @param  {String} fullName - The player's full name.
 */
const PlayerInfo = ({ fullName }) => (
  <p>{fullName}</p>
)

export default PlayerInfo
