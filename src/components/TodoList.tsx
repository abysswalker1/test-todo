import './todoList.scss';
import TodoItem from './TodoItem';
import { observer } from 'mobx-react-lite';
import TodoState from '../store/TodoState';

const TodoList = observer(() => {
  if (TodoState.todos.length === 0) {
    return <p className="todo-list__message">Пока у вас нет дел</p>;
  }

  return (
    <div className="todo-list">
      {TodoState.renderedTodos.map((todo, index) => {
        return <TodoItem todo={todo} key={todo.id} index={index} />;
      })}
    </div>
  );
});

export default TodoList;
