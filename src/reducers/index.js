import { combineReducers } from 'redux'

import FreeAgents from './free-agents'
import Roster from './roster'

/**
 * Gets application level state by combining all reducers into one central
 * location.
 * @type {Object}
 */
const rootReducer = combineReducers({
  // add in imported reducers
  freeAgents: FreeAgents,
  roster: Roster
})

export default rootReducer
