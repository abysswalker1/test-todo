import { makeAutoObservable, computed } from 'mobx';
import { Todo } from '../types';

class TodoState {

  todos: Todo[] = [];
  current_filter : string = 'all'

  constructor() {
    makeAutoObservable(this, { 
      renderedTodos : computed
    });
  }

  private _counter = 0;

  private getId() { 
    return ++this._counter;
  }

  get renderedTodos() {
    if (this.current_filter === 'completed') {
      return this.todos.filter(t => t.completed);
    } else if (this.current_filter === 'not-completed'){
      return this.todos.filter(t => !t.completed);
    }
    return this.todos
  }

  addTodo(item: Todo) {
    item.id = this.getId();
    this.todos.push(item);
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((t) => t.id != id);
  }

  completed(item: Todo) {
    item.completed = !item.completed;
  }

  getCurrentFilter(filter: string) {
    this.current_filter = filter;
    console.log(this.renderedTodos)
  }
}

export default new TodoState();
