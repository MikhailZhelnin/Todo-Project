import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteTask, changeIsCompleted } from '../../../redux/actions/action';

import { RiDeleteBin7Line } from 'react-icons/ri';
import { AiOutlineCheck } from 'react-icons/ai';

import './Task.scss';

const Task = ({ id, name, isCompleted }) => {
  const dispatch = useDispatch();

  return (
    <div className="todo__task">
      <div className="todo__task-name">
        <span className={isCompleted ? 'task-name__checked' : ''}>{name}</span>
      </div>
      <button className="todo__task-btn btn-check" onClick={() => dispatch(changeIsCompleted(id))}>
        <AiOutlineCheck />
      </button>
      <button className="todo__task-btn btn-delete" onClick={() => dispatch(deleteTask(id))}>
        <RiDeleteBin7Line />
      </button>
    </div>
  );
};

export default Task;
