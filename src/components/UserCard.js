import React from 'react'

import UserInfo from './UserInfo'

const UserCard = ({ player }) => (
  <div>
    <UserInfo fullName={player.firstName + player.lastName} />
  </div>
)
