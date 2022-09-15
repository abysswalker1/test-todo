import React from 'react';
import './form.scss'
import {observer} from 'mobx-react-lite'
import TodoState from '../store/TodoState';
import {Todo} from '../models'  


const Form = observer(() => {

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

  } 

  // const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   TitleObserver.storeInputValue(3)
  // }

  const addNewTodo = () => {
    TodoState.addTodo({
      userId : 1,
      id: 0,
      title: 'zarobotalo',
      completed: false
    })
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <h3 className="form__title">Create your TODO</h3>
      <div className="form__input-wrap">
        <input type="text" className="form__input"/>
      </div>
      <button className="form__btn btn-accept" 
              onClick={addNewTodo}>
        Создать
      </button>
      <button className="form__btn btn-delite">
        Убрать &times;
      </button>
    </form>
  );
});

export default Form;