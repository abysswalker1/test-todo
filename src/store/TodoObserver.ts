import { makeAutoObservable } from "mobx";
import {data} from "../data/todos"
import {Todo} from '../models'

class TodoObserver {
  todos = data 

  constructor() {
    makeAutoObservable(this)
  }

  addTodo(item: Todo) {
    this.todos.push(item)
  }

  removeTodo() {

  }

  completed() {

  }
}

export default new TodoObserver