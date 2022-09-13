import { makeAutoObservable } from "mobx";

class TitileObserver {

  title = ''

  constructor() {
    makeAutoObservable(this)
  }

  storeInputValue(value: string) {
    this.title = value
  }

}

export default TitileObserver