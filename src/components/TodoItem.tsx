import './todoItem.scss'
import { Todo } from '../models'
import TodoState from '../store/TodoState'
import {observer} from 'mobx-react-lite'

interface TodoProps {
  todo : Todo,
} 

const TodoItem: React.FC<TodoProps> = observer(({todo}) => {  

  return (
    <div className="todo-item">
      <label className="todo-item__wrap" htmlFor="completed">
        <input type="checkbox" id="completed" className="todo-item__completed" onChange={()=>TodoState.completed(todo)}/>
        <span className="todo-item__title" style={todo.completed ? {textDecoration : 'line-through'} : {}}>
          {todo.id} {todo.title}
        </span>  
      </label>
      <button className="todo-item__btn" type="button" onClick={()=>TodoState.removeTodo(todo.id)}>
        &times;
      </button>
    </div>
  );
});

export default TodoItem;