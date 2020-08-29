import homeReducer from './homeReducer';
import { combineReducers } from 'redux';

const allReducers=combineReducers({
     home:homeReducer
})
export default allReducers;