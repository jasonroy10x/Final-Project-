import { useMemo } from "react";
import "./ContrastController.css";

const ContrastController = ({
  avatarOnline,
  tittle,
  tittle1,
  message,
  propBackgroundColor,
  propMinWidth,
}) => {
  const chatStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const tittleStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="contrast-controller2">
      <div className="chat6" style={chatStyle}>
        <img className="avatar-online-icon5" alt="" src={avatarOnline} />
        <div className="text10">
          <div className="tittle35">
            <b className="tittle36" style={tittleStyle}>
              {tittle}
            </b>
            <div className="tittle37">{tittle1}</div>
          </div>
          <div className="message26">{message}</div>
        </div>
      </div>
      <div className="line12" />
    </div>
  );
};

export default ContrastController;
