import React from 'react';
import { useSelector } from 'react-redux';

import Task from './Task/Task';

import './TasksList.scss';

const TasksList = () => {
  const filteredTasks = useSelector((state) => state.filteredTasks);

  return (
    <div className="todo__tasks">
      {filteredTasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
};

export default TasksList;
