/**
 * Fetches state containing an array of all the players hired by the user into
 * the user's franchise.
 * @method
 * @param {Object} state - The players hired in the user's franchise.
 * @param {Function} action - The tasks to perform to modify the state.
 * @return {Array} - All the players hired into the franchise.
 */
export default function(state, action) {
  switch (action.type) {
    case 'HIRE_PLAYER':
      return action.payload
  }

  // don't do anything to state and return the original by default
  return state
}
