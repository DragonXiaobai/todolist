import React, { CSSProperties, FC, ReactElement } from "react";
import { ITodoData } from "../../interfaces/todo";
import CheckboxInput from "../../input/checkbox-input";
import Button from "../../button";
interface IProps {
  todoData: ITodoData;
  onChange: (id: string) => void;
  onClick: (id: string) => void;
}
const itemStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "10px 0",
};
const titleStyle: CSSProperties = {
  marginLeft: 10,
  fontSize: 18,
  color: "#ccc",
};
const Item: FC<IProps> = ({ todoData, onChange, onClick }): ReactElement => {
  return (
    <div style={itemStyle}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <CheckboxInput
          checked={todoData.completed}
          onCheck={() => onChange(todoData.id)}
        />
        <span
          style={{
            ...titleStyle,
            color: todoData.completed ? "#13c2c2" : "#ccc",
          }}
        >
          {todoData.title}
        </span>
      </div>
      <Button value="删除" size="normal" onClick={() => onClick(todoData.id)} />
    </div>
  );
};
export default Item;
