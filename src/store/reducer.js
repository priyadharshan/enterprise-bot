import { combineReducers } from 'redux';
import { reducer as tokenDetails } from '../domain/token-details';

const rootReducer = combineReducers({
  tokenDetails,
});

export default rootReducer;
