import * as actionTypes from '../constants/constants';

export const addTask = (newTask) => {
  return {
    type: actionTypes.ADD_TASK,
    payload: newTask,
  };
};

export const deleteTask = (id) => {
  return {
    type: actionTypes.DELETE_TASK,
    payload: id,
  };
};

export const changeIsCompleted = (id) => {
  return {
    type: actionTypes.COMPLETE_TASK,
    payload: id,
  };
};

export const changeTheme = () => {
  return {
    type: actionTypes.CHANGE_THEME,
  };
};

export const filterTodo = (filter) => {
  return {
    type: actionTypes.FILTER_TASK,
    payload: filter,
  };
};
