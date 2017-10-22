import React from 'react'

/**
 * A presentational component that simply displays the player's photo.
 * @method PlayerProfilePhoto
 * @param  {String} profilePhotoSrc - The url to the player's photo.
 */
const PlayerProfilePhoto = ({ profilePhotoSrc, fullName }) => {
  return (
    <img src={profilePhotoSrc} alt={`${fullName}'s profile picture.`} />
  )
}

export default PlayerProfilePhoto
