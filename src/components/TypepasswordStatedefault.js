import { useMemo } from "react";
import "./TypepasswordStatedefault.css";

const TypepasswordStatedefault = ({
  passwordInput,
  typepasswordStatedefaultWidth,
  typepasswordStatedefaultPosition,
  typepasswordStatedefaultTop,
  typepasswordStatedefaultLeft,
  typepasswordStatedefaultAlignSelf,
}) => {
  const typepasswordStatedefaultStyle = useMemo(() => {
    return {
      width: typepasswordStatedefaultWidth,
      position: typepasswordStatedefaultPosition,
      top: typepasswordStatedefaultTop,
      left: typepasswordStatedefaultLeft,
      alignSelf: typepasswordStatedefaultAlignSelf,
    };
  }, [
    typepasswordStatedefaultWidth,
    typepasswordStatedefaultPosition,
    typepasswordStatedefaultTop,
    typepasswordStatedefaultLeft,
    typepasswordStatedefaultAlignSelf,
  ]);

  return (
    <div
      className="typepassword-statedefault"
      style={typepasswordStatedefaultStyle}
    >
      <div className="lock-parent">
        <img className="lock-icon1" alt="" src="/lock1.svg" />
        <div className="password">{passwordInput}</div>
      </div>
      <img className="eye-off-icon1" alt="" src="/eyeoff1.svg" />
    </div>
  );
};

export default TypepasswordStatedefault;
