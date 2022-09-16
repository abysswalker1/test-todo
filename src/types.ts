// Тип элемента Todo
export interface Todo {
  userId: any;
  id: number;
  title: string;
  completed: boolean;
}

//Тип состояния текущего фильтра завершенных дел
export type CurrentFilter = 'all' | 'completed' | 'not-completed';
