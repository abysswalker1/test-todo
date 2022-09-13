import React from 'react';
import './form.scss'

const Form = () => {

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  } 

  const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(event.target)
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <h3 className="form__title">Create your TODO</h3>
      <div className="form__input-wrap">
        <input type="text" className="form__input"/>
      </div>
      <button className="form__btn btn-accept">
        Создать
      </button>
      <button className="form__btn btn-delite">
        Убрать &times;
      </button>
    </form>
  );
};

export default Form;