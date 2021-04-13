export interface ITodoData {
  id: string;
  title: string;
  completed: boolean;
}
export interface IState {
  todoData: ITodoData[];
}
export enum ETpye {
  INIT_TODO = "init_todo",
  ADD_TODO = "add_todo",
  REMOVE_TODO = "remove_todo",
  CHANGE_TODO = "change_todo",
}
export interface IPayloadAction<T> {
  type: ETpye;
  payload: T;
}
