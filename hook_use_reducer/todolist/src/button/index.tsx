import React, { CSSProperties, FC, ReactElement } from "react";
import st from "./style.module.scss";
interface IProps {
  value: string;
  onClick?: () => void;
  style?: CSSProperties;
  className?: string;
  size?: TSize;
}
type TSize = "normal" | "middle" | "big";
const defaultStyle: CSSProperties = {
  border: 0,
  outline: "none",
  borderRadius: 5,
  textAlign: "center",
  backgroundColor: "#13c2c2",
  color: "#fff",
  fontSize: 20,
  fontWeight: 700,
  cursor: "pointer",
};
const Button: FC<IProps> = ({
  value,
  onClick,
  style,
  className,
  size = "middle",
}): ReactElement => {
  const getClassSize = (size: TSize): string => {
    if (size === "normal") return st.normal;
    if (size === "middle") return st.middle;
    return st.big;
  };
  return (
    <button
      onClick={onClick}
      style={{ ...style, ...defaultStyle }}
      className={`${className} ${getClassSize(size)}`}
    >
      {value}
    </button>
  );
};
export default Button;
