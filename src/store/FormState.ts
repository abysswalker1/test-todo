import { makeAutoObservable } from "mobx";

class FormState {

  title : string = ''

  constructor() {
    makeAutoObservable(this)
  }

  onchange(text: string) {
    this.title = text
  }

  clear() {
    this.title = ''
  }
}

export default new FormState