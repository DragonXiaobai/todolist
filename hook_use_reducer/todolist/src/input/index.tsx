import React, {
  CSSProperties,
  FC,
  ReactElement,
  RefObject,
  useState,
} from "react";
import st from "./style.module.scss";

interface IProps {
  inputRef: RefObject<HTMLInputElement>;
  placeholder?: string;
  value?: string;
  onChange?: () => void;
  style?: CSSProperties;
  className?: string;
}
const defaultStyle: CSSProperties = {
  border: 0,
  outline: "none",
  width: "100%",
  padding: 10,
  height: 45,
  fontSize: 18,
};
const Input: FC<IProps> = ({
  inputRef,
  placeholder,
  value,
  onChange,
  style,
  className,
}): ReactElement => {
  const [touch, setTouch] = useState(false);
  const handleFocus = (): void => {
    setTouch(true);
  };
  const handleBlur = (): void => {
    setTouch(false);
  };
  return (
    <div className={st.inputBox}>
      <div
        className={`${st.polishing} ${
          touch ? st.polish_animate : st.polish_default
        }`}
      ></div>
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        type="text"
        placeholder={placeholder}
        style={{ ...style, ...defaultStyle }}
        className={className}
        onChange={onChange}
        value={value}
        ref={inputRef}
      />
    </div>
  );
};
export default Input;
