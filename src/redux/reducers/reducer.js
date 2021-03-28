import * as actionTypes from '../constants/constants';

const defaultState = {
  tasks: [],
  theme: true,
};

const reducer = (state = defaultState, action) => {
  if (action.type === actionTypes.ADD_TASK) {
    const newTask = [...state.tasks, action.payload];
    return {
      ...state,
      tasks: newTask,
    };
  }
  if (action.type === actionTypes.DELETE_TASK) {
    const newTask = state.tasks.filter((task) => task.id !== action.payload);
    return {
      ...state,
      tasks: newTask,
    };
  }
  if (action.type === actionTypes.COMPLETE_TASK) {
    const newTask = state.tasks.map((task) =>
      task.id === action.payload ? { ...task, isCompleted: !task.isCompleted } : task,
    );
    return {
      ...state,
      tasks: newTask,
    };
  }
  if (action.type === actionTypes.CHANGE_THEME) {
    return {
      ...state,
      theme: !state.theme,
    };
  } else {
    return state;
  }
};

export default reducer;
