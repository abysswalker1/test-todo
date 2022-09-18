import { makeAutoObservable } from 'mobx';

class FormState {
  public title: string = '';

  public constructor() {
    makeAutoObservable(this);
  }

  public onchange(text: string) {
    this.title = text;
  }

  public clear() {
    this.title = '';
  }
}

export default new FormState();
