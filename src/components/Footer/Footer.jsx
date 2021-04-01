import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { filterTodo } from '../../redux/actions/action';

import './Footer.scss';

const FILTERS_BTN = [
  {
    text: 'All',
    id: 'all',
  },
  {
    text: 'Active',
    id: 'active',
  },
  {
    text: 'Completed',
    id: 'completed',
  },
];

const Footer = () => {
  const filter = useSelector((state) => state.filter);
  const theme = useSelector((state) => state.theme.theme);
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const tasksLength = tasks.length;

  const [taskCounter, setTaskCounter] = useState(tasksLength);

  const getActiveTasksCounter = (tasks) => {
    return tasks.filter((task) => !task.isCompleted).length;
  };

  useEffect(() => {
    setTaskCounter(getActiveTasksCounter(tasks));
  }, [tasks]);

  return (
    <div className={theme ? 'todo__footer' : 'todo__footer todo__footer-dark'}>
      <div className={theme ? 'todo__footer-count' : 'todo__footer-count todo__footer-count__cark'}>
        {taskCounter} Task Left
      </div>

      <div className="todo__footer-buttons">
        {FILTERS_BTN.map(({ text, id }) => (
          <button
            key={id}
            className={
              id === filter
                ? 'footer-buttons__btn footer-buttons__btn-active'
                : 'footer-buttons__btn'
            }
            onClick={() => dispatch(filterTodo(id))}>
            <span className={!theme ? 'btn-text__dark' : ''}>{text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Footer;
