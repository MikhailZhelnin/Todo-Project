import * as actionTypes from '../constants/constants';

const defaultState = {
  tasks: [],
  filteredTasks: [],
  theme: true,
};

const reducer = (state = defaultState, action) => {
  if (action.type === actionTypes.ADD_TASK) {
    const newTask = [...state.tasks, action.payload];
    return {
      ...state,
      tasks: newTask,
      filteredTasks: newTask,
    };
  }
  if (action.type === actionTypes.DELETE_TASK) {
    const newTask = state.tasks.filter((task) => task.id !== action.payload);
    return {
      ...state,
      tasks: newTask,
      filteredTasks: newTask,
    };
  }
  if (action.type === actionTypes.COMPLETE_TASK) {
    const newTask = state.tasks.map((task) =>
      task.id === action.payload ? { ...task, isCompleted: !task.isCompleted } : task,
    );
    return {
      ...state,
      tasks: newTask,
      filteredTasks: newTask,
    };
  }
  if (action.type === actionTypes.CHANGE_THEME) {
    return {
      ...state,
      theme: !state.theme,
    };
  }
  if (action.type === actionTypes.FILTER_TODO) {
    if (action.payload === 'all') {
      return {
        ...state,
        filteredTasks: state.tasks,
      };
    } else if (action.payload === 'completed') {
      const newTasks = state.tasks.filter((task) => task.isCompleted === true);
      return {
        ...state,
        filteredTasks: newTasks,
      };
    } else if (action.payload === 'uncompleted') {
      const newTasks = state.tasks.filter((task) => task.isCompleted === false);
      return {
        ...state,
        filteredTasks: newTasks,
      };
    }
  } else {
    return state;
  }
};

export default reducer;
