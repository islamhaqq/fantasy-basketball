export default function (state = null, action) {
  switch (action.type) {
    case 'UPDATE_PLAYER_EMAIL_INPUT':
      return action.payload
  }

  return state
}
