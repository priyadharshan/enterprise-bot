import { combineReducers } from 'redux'
import { reducer as tokenDetails } from '../domain/token-details'
import { reducer as intentList } from '../domain/intent-list'
import { reducer as intentDetails } from '../domain/intent-details'

const rootReducer = combineReducers({
  tokenDetails,
  intentList,
  intentDetails,
})

export default rootReducer
