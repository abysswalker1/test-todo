import { makeAutoObservable } from "mobx";

class FormState {

  title = ''

  constructor() {
    makeAutoObservable(this)
  }

}

export default FormState