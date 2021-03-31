import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTask, filterTodo } from '../../redux/actions/action';

import './Input.scss';

const Input = () => {
  const [name, setName] = useState('');

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '') {
      return false;
    }
    const newTask = {
      id: new Date().getTime().toString(),
      name,
      isCompleted: false,
    };
    dispatch(addTask(newTask));
    setName('');
  };

  const handleChange = (e) => {
    dispatch(filterTodo(e.target.value));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className="form__left">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className={theme ? 'form__input' : 'form__input form__input-dark'}
            type="text"
            placeholder="Enter your task..."
          />
          <button type="submit" className="form__btn">
            Add
          </button>
        </div>

        <div className="form__right">
          <select
            name="todo"
            className={theme ? 'form__select' : 'form__select form__select-dark'}
            onChange={handleChange}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default Input;
