import { combineReducers } from 'redux'

import FreeAgents from './free-agents'

/**
 * Gets application level state by combining all reducers into one central
 * location.
 * @type {Object}
 */
const rootReducer = combineReducers({
  // add in imported reducers
  freeAgents: FreeAgents
})

export default rootReducer
