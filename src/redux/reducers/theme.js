import * as actionTypes from '../constants/constants';

const defaultState = {
  theme: true,
};

const theme = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_THEME:
      return {
        ...state,
        theme: !state.theme,
      };
    default:
      return state;
  }
};

export default theme;
