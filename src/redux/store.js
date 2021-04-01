import { createStore } from 'redux';
import rootReducer from './reducers/index';

import { loadState, saveState } from '../localStorage';

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => {
  saveState({
    tasks: store.getState().tasks,
    theme: store.getState().theme,
    filter: store.getState().filter,
  });
});

export default store;
