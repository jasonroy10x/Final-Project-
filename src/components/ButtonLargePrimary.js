import { useMemo } from "react";
import "./ButtonLargePrimary.css";

const ButtonLargePrimary = ({
  buttonText,
  buttonLargePrimaryBackgroundColor,
  buttonLargePrimaryWidth,
  buttonLargePrimaryPosition,
  buttonLargePrimaryTop,
  buttonLargePrimaryLeft,
  buttonLargePrimaryCursor,
  onButtonLargePrimaryContainerClick,
}) => {
  const buttonLargePrimaryStyle = useMemo(() => {
    return {
      backgroundColor: buttonLargePrimaryBackgroundColor,
      width: buttonLargePrimaryWidth,
      position: buttonLargePrimaryPosition,
      top: buttonLargePrimaryTop,
      left: buttonLargePrimaryLeft,
      cursor: buttonLargePrimaryCursor,
    };
  }, [
    buttonLargePrimaryBackgroundColor,
    buttonLargePrimaryWidth,
    buttonLargePrimaryPosition,
    buttonLargePrimaryTop,
    buttonLargePrimaryLeft,
    buttonLargePrimaryCursor,
  ]);

  return (
    <div
      className="buttonlargeprimary"
      style={buttonLargePrimaryStyle}
      onClick={onButtonLargePrimaryContainerClick}
    >
      <b className="button">{buttonText}</b>
    </div>
  );
};

export default ButtonLargePrimary;
