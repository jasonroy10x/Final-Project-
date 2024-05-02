import { useMemo } from "react";
import "./Chat.css";

const Chat = ({
  avatarOnline,
  tittle,
  tittle1,
  message,
  propWidth,
  propFlex,
  propWidth1,
  propAlignSelf,
  propAlignSelf1,
}) => {
  const chat1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const textStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const tittle1Style = useMemo(() => {
    return {
      width: propWidth1,
      alignSelf: propAlignSelf,
    };
  }, [propWidth1, propAlignSelf]);

  const messageStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  return (
    <div className="chat7" style={chat1Style}>
      <img
        className="avatar-online-icon6"
        loading="eager"
        alt=""
        src={avatarOnline}
      />
      <div className="text13" style={textStyle}>
        <div className="tittle40" style={tittle1Style}>
          <b className="tittle41">{tittle}</b>
          <div className="tittle42">{tittle1}</div>
        </div>
        <div className="message28" style={messageStyle}>
          {message}
        </div>
      </div>
    </div>
  );
};

export default Chat;
