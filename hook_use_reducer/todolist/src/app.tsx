import React, {
  ReactElement,
  useCallback,
  useEffect,
  useReducer,
  useRef,
} from "react";
import { v1 } from "uuid";
import Input from "./input";
import Button from "./button";
import List from "./list";
import st from "./style.module.scss";
import { ETpye, IState, ITodoData } from "./interfaces/todo";
import { todoReducer } from "./reducers/todo";
const init = (initTodoList: ITodoData[]): IState => {
  return {
    todoData: initTodoList,
  };
};
const Todo = (): ReactElement => {
  const [state, dispacth] = useReducer(todoReducer, [], init);
  const inputRef = useRef<HTMLInputElement>(null);
  // 获取本地缓存的任务
  useEffect(() => {
    const todolist: ITodoData[] = JSON.parse(
      localStorage.getItem("todolist") || "[]"
    );
    // 存放至reduer中
    dispacth({
      type: ETpye.INIT_TODO,
      payload: todolist,
    });
  }, []);
  useEffect(() => {
    // 主要是用来存储到本地缓存到
    localStorage.setItem("todolist", JSON.stringify(state.todoData || []));
  }, [state.todoData]);
  const handleAddClick = useCallback(() => {
    if (!inputRef.current) return;
    dispacth({
      type: ETpye.ADD_TODO,
      payload: {
        id: v1(),
        title: inputRef.current.value,
        completed: false,
      },
    });
    inputRef.current.value = "";
  }, []);
  const handleChange = useCallback((id: string) => {
    dispacth({
      type: ETpye.CHANGE_TODO,
      payload: id,
    });
  }, []);
  const handleClick = useCallback((id: string) => {
    dispacth({
      type: ETpye.REMOVE_TODO,
      payload: id,
    });
  }, []);
  return (
    <div className={st.container}>
      <header className={st.header}>
        <Input placeholder="请添加待办事务" inputRef={inputRef} />
        <Button value="添加" onClick={handleAddClick} />
      </header>
      <main>
        <List
          todoList={state.todoData}
          onCheckItem={handleChange}
          onClick={handleClick}
        />
      </main>
    </div>
  );
};
export default Todo;
