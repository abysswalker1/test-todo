import './todoItem.scss'
import { Todo } from '../models'

interface TodoProps {
  todo : Todo,
  id : number
} 

const TodoItem = ({todo}: TodoProps) => {

  return (
    <div className="todo-item">
      <label className="todo-item__wrap" htmlFor="comleted">
        <input type="checkbox" id="comleted" className="todo-item__completed"/>
        <span className="todo-item__title">
          {todo.id}{todo.title}
        </span>  
      </label>
      <button className="todo-item__btn" type="button">
        &times;
      </button>
    </div>
  );
};

export default TodoItem;