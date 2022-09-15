import React from 'react';
import './todoList.scss';
import TodoItem from './TodoItem'
import {observer} from 'mobx-react-lite'
import TodoState from '../store/TodoState';

const TodoList = observer(() => {
  return (
    <div className="todo-list">
      {TodoState.todos.map((todo, index) => {
        return <TodoItem todo={todo} key={index}/>
      })}
    </div>
  );
});

export default TodoList;