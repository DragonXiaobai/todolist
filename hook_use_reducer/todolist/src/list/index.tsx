import React, { FC, memo, ReactElement } from "react";
import { ITodoData } from "../interfaces/todo";
import Item from "./item";
const MemoItem = memo(Item);
interface IProps {
  todoList: ITodoData[];
  onCheckItem: (id: string) => void;
  onClick: (id: string) => void;
}
const List: FC<IProps> = ({ todoList, onCheckItem, onClick }): ReactElement => {
  return (
    <div>
      {todoList.map((todo) => {
        return (
          <MemoItem
            {...todo}
            key={todo.id}
            todoData={todo}
            onChange={onCheckItem}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
};
export default List;
