import { useMemo } from "react";
import "./TypeemailStatefilledSize.css";

const TypeemailStatefilledSize = ({
  mail,
  angelalaufeaumailcom,
  showMailIcon,
  typeemailStatefilledSizeAlignSelf,
  typeemailStatefilledSizePosition,
  typeemailStatefilledSizeTop,
  typeemailStatefilledSizeLeft,
  typeemailStatefilledSizeWidth,
  angelalaufeaumailcomOpacity,
  angelalaufeaumailcomLetterSpacing,
  angelalaufeaumailcomLineHeight,
  angelalaufeaumailcomFontWeight,
  angelalaufeaumailcomColor,
}) => {
  const typeemailStatefilledSizeStyle = useMemo(() => {
    return {
      alignSelf: typeemailStatefilledSizeAlignSelf,
      position: typeemailStatefilledSizePosition,
      top: typeemailStatefilledSizeTop,
      left: typeemailStatefilledSizeLeft,
      width: typeemailStatefilledSizeWidth,
    };
  }, [
    typeemailStatefilledSizeAlignSelf,
    typeemailStatefilledSizePosition,
    typeemailStatefilledSizeTop,
    typeemailStatefilledSizeLeft,
    typeemailStatefilledSizeWidth,
  ]);

  const angelalaufeaumailcomStyle = useMemo(() => {
    return {
      opacity: angelalaufeaumailcomOpacity,
      letterSpacing: angelalaufeaumailcomLetterSpacing,
      lineHeight: angelalaufeaumailcomLineHeight,
      fontWeight: angelalaufeaumailcomFontWeight,
      color: angelalaufeaumailcomColor,
    };
  }, [
    angelalaufeaumailcomOpacity,
    angelalaufeaumailcomLetterSpacing,
    angelalaufeaumailcomLineHeight,
    angelalaufeaumailcomFontWeight,
    angelalaufeaumailcomColor,
  ]);

  return (
    <div
      className="typeemail-statefilled-size"
      style={typeemailStatefilledSizeStyle}
    >
      {showMailIcon && <img className="mail-icon2" alt="" src={mail} />}
      <div className="angelalaufeaumailcom" style={angelalaufeaumailcomStyle}>
        {angelalaufeaumailcom}
      </div>
    </div>
  );
};

export default TypeemailStatefilledSize;
