export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export type CurrentFilter = 'all' | 'completed' | 'not-completed';
