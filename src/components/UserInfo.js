import React from 'react'

/**
 * A presentational component that displays a basketball player's information.
 * @method UserInfo
 * @param  {String} fullName - The player's full name.
 */
const UserInfo = ({ fullName }) => (
  <p>{fullName}</p>
)

export default UserInfo
