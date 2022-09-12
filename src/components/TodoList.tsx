import React from 'react';
import './todoList.scss';
import { todos } from '../data/data'
import TodoItem from './TodoItem'

const TodoList = () => {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => {
        return <TodoItem todo={todo} key={index}/>
      })}
    </div>
  );
};

export default TodoList;