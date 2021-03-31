import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTask } from '../../redux/actions/action';

import './Input.scss';

const Input = () => {
  const [name, setName] = useState('');

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

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

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
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
      </form>
    </>
  );
};

export default Input;
