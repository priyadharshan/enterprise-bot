import { combineReducers } from 'redux'
import { reducer as tokenDetails } from '../domain/token-details'
import { reducer as intentList } from '../domain/intent-list'

const rootReducer = combineReducers({
  tokenDetails,
  intentList,
})

export default rootReducer
