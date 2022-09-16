import { makeAutoObservable } from 'mobx';

class FormState {
  //Состояние с текстом введенным в input
  title: string = '';

  public constructor() {
    makeAutoObservable(this);
  }

  //Метод следит когда event.target.value меняется и записывет его в состояние
  public onchange(text: string) {
    this.title = text;
  }

  public clear() {
    this.title = '';
  }
}

export default new FormState();
