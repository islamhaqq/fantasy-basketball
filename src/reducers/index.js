import { combineReducers } from 'redux'

import FreeAgents from './free-agents'
import Roster from './roster'

/**
 * Gets application level state by combining all reducers into one central
 * location.
 * @type {Object}
 */
const rootReducer = combineReducers({
  // add in imported reducers as global state
  /**
   * The players available for hire.
   * @type {Array}
   */
  freeAgents: FreeAgents,
  /**
   * The players hired in the user's franchise.
   * @type {Array}
   */
  roster: Roster
})

export default rootReducer
