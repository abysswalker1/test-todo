import { makeAutoObservable, computed } from 'mobx';
import { Todo, CurrentFilter } from '../types';
 
class TodoState { 

  //Массив со всеми TODO
  todos: Todo[] = [];

  //Текущее состояние фильтра
  current_filter: CurrentFilter = 'all';

  // Вычисление тех TODO, 
  // которые должны быть отрисованы, в соответствии с фильтром завершенныйх дел
  get renderedTodos() {
    if (this.current_filter === 'completed') {
      return this.todos.filter((t) => t.completed);
    } else if (this.current_filter === 'not-completed') {
      return this.todos.filter((t) => !t.completed);
    }
    return this.todos;
  }

  public constructor() {
    makeAutoObservable(this, {
      renderedTodos: computed,
    });
  }

  //Счетчик для создания id компонентов
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

  //Берет из компонента Filter его текущее состояние
  public getCurrentFilter(filter: CurrentFilter) {
    this.current_filter = filter;
  }
}

export default new TodoState();
