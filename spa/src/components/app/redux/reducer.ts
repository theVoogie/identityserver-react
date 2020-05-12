import { combineReducers } from 'redux';

import personPageReducer from '../../person-page/redux/reducer';
import testPageReducer from '../../test-page/redux/reducer';

export default combineReducers({
  person: personPageReducer,
  messages: testPageReducer
});
