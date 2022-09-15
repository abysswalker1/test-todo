import React, {useContext} from 'react';
import './todoList.scss';
import TodoItem from './TodoItem'
import {observer} from 'mobx-react-lite'
import {TodoContext} from '../context'
import TodoState from '../store/TodoState' 

const TodoList = observer(() => {

  return (
    <div className="todo-list">
      {TodoState.todos.map(todo => {
        return <TodoItem todo={todo} key={todo.id}/>
      })}
    </div>
  );
});

export default TodoList;