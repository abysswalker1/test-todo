import { makeAutoObservable } from "mobx";
import {Todo} from '../models'

class TodoState {
  todos : Todo[] = []

  private _counter = 0;

  constructor() {
    makeAutoObservable(this)
  }

  private getId() {
    return ++ this._counter;
  }

  addTodo(item: Todo) {
    item.id = this.getId()
    this.todos.push(item)
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(t => t.id != id)
  }

  completed(item: Todo) {
    item.completed = !item.completed
    console.log(item.completed)
  }
}

export default new TodoState