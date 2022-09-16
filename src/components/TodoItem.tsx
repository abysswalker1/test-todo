import './todoItem.scss';
import { Todo } from '../types';
import TodoState from '../store/TodoState';
import { observer } from 'mobx-react-lite';

//Тип пропсов компонента Todo 
interface TodoProps {
  todo: Todo;
  index: number;
}

const TodoItem: React.FC<TodoProps> = observer(({ todo, index }) => {
  return (
    <div className="todo-item">
      <label className="todo-item__wrap">
        {/* Чекбокс */}
        <input
          type="checkbox"
          className="todo-item__completed"
          onChange={() => TodoState.completed(todo)}
        />
        {/* Текст Todo */}
        <p
          className="todo-item__title"
          style={todo.completed ? { textDecoration: 'line-through' } : {}}>
          {index + 1}. {todo.title}
        </p>
      </label>
      {/* Кнопка удаления */}
      <button
        className="todo-item__btn"
        type="button"
        onClick={() => TodoState.removeTodo(todo.id)}>
        &times;
      </button>
    </div>
  );
});

export default TodoItem;
