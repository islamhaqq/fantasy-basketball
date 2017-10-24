import { combineReducers } from 'redux'

import FreeAgents from './free-agents'
import Roster from './roster'
import PlayerEmailInput from './player-email-input'

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
  roster: Roster,
  /**
   * What the user is typing in the hire player text field to add a free agent
   * to the user's roster.
   * @type {String}
   */
  playerEmailInput: PlayerEmailInput
})

export default rootReducer
