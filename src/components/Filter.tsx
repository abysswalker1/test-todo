import React from 'react';
import { observer } from 'mobx-react-lite';
import TodoState from '../store/TodoState';
import './filter.scss'

const Filter = observer(() => {
  if (TodoState.todos.length === 0) return null;

  return (
    <div className="filter">
      <button onClick={() => TodoState.getCurrentFilter('completed')}>Завершенные</button>
      <button onClick={() => TodoState.getCurrentFilter('not-completed')}>Незавершенные</button>
      <button onClick={() => TodoState.getCurrentFilter('all')}>Сбросить</button>
    </div>
  );
});

export default Filter;
