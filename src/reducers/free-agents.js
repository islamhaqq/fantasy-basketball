/**
 * Fetches state containing an array of all the players that are available
 * for hiring into the user's franchise/club.
 * @method
 * @param {Object} state - The players hired in the user's franchise.
 * @param {Function} action - The tasks to perform to modify the state.
 * @return {Array} - All the players available for hire.
 */
export default function (state = null, action) {
  switch (action.type) {
    case 'HIRE_PLAYER':
      return action.payload
  }

  return state.concat([
    // all the available players to be hired i.e. "free agents"
    {
      email: 'lebronjames@cavaliers.com',
      firstName: 'Lebron',
      lastName: 'James',
      photo: 'http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/statscube/players/large/lebron_james.png'
    },
    {
      email: 'chrispaul@clippers.com',
      firstName: 'Chris',
      lastName: 'Paul',
      photo: 'http://static1.1.sqspcdn.com/static/f/360296/19968996/1345620638217/LAC_Paul_Chris.jpg?token=4Gc3%2BxP%2Faagl7KParPsltTirnBw%3D'
    }
  ])
}
