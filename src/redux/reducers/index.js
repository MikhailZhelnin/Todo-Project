import { combineReducers } from 'redux';
import tasks from './tasks';
import theme from './theme';
import filter from './filter';

const rootReducer = combineReducers({ tasks, theme, filter });

export default rootReducer;
