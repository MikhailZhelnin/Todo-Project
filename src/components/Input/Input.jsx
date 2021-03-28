import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTask } from '../../redux/actions/action';

import './Input.scss';

const Input = () => {
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: new Date().getTime().toString(),
      name,
      isCompleted: false,
    };
    dispatch(addTask(newTask));
    setName('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className="form__left">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="form__input"
            type="text"
            placeholder="Enter your task..."
          />
          <button type="submit" className="form__btn">
            Add
          </button>
        </div>

        <div className="form__right">
          <select name="todo" className="form__select">
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
