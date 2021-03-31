import * as actionTypes from '../constants/constants';

const BASE_FILTER = 'all';

const filter = (state = BASE_FILTER, action) => {
  switch (action.type) {
    case actionTypes.FILTER_TASK:
      return action.payload;
    default:
      return state;
  }
};

export default filter;
