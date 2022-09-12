import React from 'react';
import './App.scss';
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="app-wrap">
      <div className="app">
        <h1 className="app-title">Todo list</h1>
        <div className="app-todo-list">
          <TodoList />
        </div>
      </div>
      
    </div>
  );
}

export default App;
