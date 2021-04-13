import { ETpye, IPayloadAction, IState, ITodoData } from "../interfaces/todo";

export function todoReducer(
  state: IState,
  action: IPayloadAction<ITodoData[] | ITodoData | string>
): IState {
  const { type, payload } = action;
  switch (type) {
    case ETpye.INIT_TODO:
      return { ...state, todoData: payload as ITodoData[] };
    case ETpye.ADD_TODO:
      const todo = state.todoData.find(
        (todo) => todo.title === (payload as ITodoData).title
      );
      if (todo) {
        alert("任务已存在，不能重复创建");
        return state;
      }
      return {
        ...state,
        todoData: [payload as ITodoData, ...state.todoData],
      };
    case ETpye.REMOVE_TODO:
      return {
        ...state,
        todoData: state.todoData.filter((todo) => todo.id !== payload),
      };
    case ETpye.CHANGE_TODO:
      return {
        ...state,
        todoData: state.todoData.map((todo) => {
          if (todo.id === payload) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };
  }
}
