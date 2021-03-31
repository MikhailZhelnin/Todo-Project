import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Task from './Task/Task';

import './TasksList.scss';

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const filter = useSelector((state) => state.filter);

  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const filterTasks = (tasks, filter) => {
    switch (filter) {
      case 'completed':
        return tasks.filter((task) => task.isCompleted);
      case 'active':
        return tasks.filter((task) => !task.isCompleted);
      default:
        return tasks;
    }
  };

  useEffect(() => {
    setFilteredTasks(filterTasks(tasks, filter));
  }, [filter, tasks]);

  return (
    <div className="todo__tasks">
      {filteredTasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
};

export default TasksList;
