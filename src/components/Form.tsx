import React from 'react';
import './form.scss';
import { observer } from 'mobx-react-lite';
import TodoState from '../store/TodoState';
import FormState from '../store/FormState';

const Form = observer(() => {
  // Если строка инпута не пустая - создается элемент TODO
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (FormState.title.trim()) {
      addNewTodo();
    }
  };

  // Следит за текстом вводимым в input, записывает его в FormState.title
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    FormState.onchange(event.target.value);
  };

  // Создать элемент TODO
  const addNewTodo = () => {
    TodoState.addTodo({
      userId: 1,
      id: 0,
      title: FormState.title,
      completed: false,
    });
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      {/* Заголовок */}
      <h3 className="form__title">Create your TODO</h3>
      <div className="form__input-wrap">
        <input type="text" className="form__input" onChange={changeHandler} />
      </div>
      <button className="form__btn btn-accept" type="submit">
        Создать
      </button>
      <button
        className="form__btn btn-delite"
        type="reset"
        onClick={() => FormState.clear()}
        style={FormState.title ? { display: 'inline-block' } : { display: 'none' }}>
        Убрать &times;
      </button>
    </form>
  );
});

export default Form;
