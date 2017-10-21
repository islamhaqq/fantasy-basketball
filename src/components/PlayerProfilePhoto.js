import React from 'react'

/**
 * A presentational component that simply displays the player's photo.
 * @method PlayerProfilePhoto
 * @param  {String} profilePhotoSrc - The url to the player's photo.
 */
const PlayerProfilePhoto = ({ profilePhotoSrc }) => {
  return (
    <img src={profilePhotoSrc} />
  )
}

export default PlayerProfilePhoto
