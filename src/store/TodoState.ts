import { makeAutoObservable, computed } from 'mobx';
import { Todo, CurrentFilter } from '../types';

class TodoState {
  public todos: Todo[] = [];

  public currentFilter: CurrentFilter = 'all';

  get renderedTodos() {
    if (this.currentFilter === 'completed') {
      return this.todos.filter((t) => t.completed);
    } else if (this.currentFilter === 'not-completed') {
      return this.todos.filter((t) => !t.completed);
    }
    return this.todos;
  }

  public constructor() {
    makeAutoObservable(this, {
      renderedTodos: computed,
    });
  }

  private _counter = 0;

  private getId() {
    return ++this._counter;
  }

  public addTodo(item: Todo) {
    item.id = this.getId();
    this.todos.push(item);
  }

  public removeTodo(id: number) {
    this.todos = this.todos.filter((t) => t.id !== id);
  }

  public completed(item: Todo) {
    item.completed = !item.completed;
  }

  public setCurrentFilter(filter: CurrentFilter) {
    this.currentFilter = filter;
  }
}

export default new TodoState();
