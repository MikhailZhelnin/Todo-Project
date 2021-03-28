import React from 'react';
import { useSelector } from 'react-redux';

import Task from './Task/Task';

import './TasksList.scss';

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className="todo__tasks">
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
};

export default TasksList;
