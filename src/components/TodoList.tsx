import React from 'react';
import './todoList.scss';
import TodoItem from './TodoItem'
import {observer} from 'mobx-react-lite'
import TodoObserver from '../store/TodoObserver';

const TodoList = observer(() => {
  return (
    <div className="todo-list">
      {TodoObserver.todos.map((todo, index) => {
        return <TodoItem todo={todo} id={index} key={index}/>
      })}
    </div>
  );
});

export default TodoList;