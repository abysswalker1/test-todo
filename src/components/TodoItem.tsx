import React, {useEffect} from 'react';
import './todoItem.scss'
import { Todo } from '../models'

interface TodoProps {
  todo : Todo
} 

const TodoItem = ({todo}: TodoProps) => {
  const [comleted, setCompleted] = React.useState(false)

  useEffect(() =>{
    console.log(comleted)
  })

  return (
    <div className="todo-item">
      <label className="todo-item__wrap" htmlFor="comleted">
        <input type="checkbox" id="comleted" className="todo-item__completed" onChange={() => setCompleted(prev => !prev)}/>
        <span className="todo-item__title">
          {todo.title}
        </span>  
      </label>
      <button className="todo-item__btn" type="button">
        &times;
      </button>
    </div>
  );
};

export default TodoItem;