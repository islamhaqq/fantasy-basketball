import React from 'react'

import UserInfo from './UserInfo'

const UserCard = ({ player }) => (
  <li>
    <UserInfo fullName={player.firstName + player.lastName} />
  </li>
)

export default UserCard
