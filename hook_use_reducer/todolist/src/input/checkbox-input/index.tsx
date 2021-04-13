import React, { CSSProperties, FC, ReactElement } from "react";
import { v1 } from "uuid";
import st from "./style.module.scss";
/**
 * @author wangxiaolong
 * @param uniqueKey 因为组件复用，绑定的id应当不重复
 */
interface IProps {
  checked?: boolean;
  style?: CSSProperties;
  className?: string;
  onCheck: () => void;
}
const CheckboxInput: FC<IProps> = ({
  checked = false,
  style,
  className,
  onCheck,
}): ReactElement => {
  const uniqueKey = v1();
  return (
    <div className={`${className} ${st.checkbox}`}>
      <input
        id={`checkbox${uniqueKey}`}
        type="checkbox"
        onChange={onCheck}
        checked={checked}
        style={style}
      />
      <label htmlFor={`checkbox${uniqueKey}`}></label>
    </div>
  );
};
export default CheckboxInput;
