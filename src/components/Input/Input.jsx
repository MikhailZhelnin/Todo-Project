import React from 'react';

import './Input.scss';

const Input = () => {
  return (
    <div className="todo__form">
      <form className="form">
        <input className="form__text" type="text" />
        <button className="form__btn">add</button>
      </form>
    </div>
  );
};

export default Input;
