import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Chat from "./Chat";
import "./Message.css";

const Message1 = () => {
  const navigate = useNavigate();

  const onMessageContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="message29" onClick={onMessageContainerClick}>
      <b className="tittle43">Alerts</b>
      <div className="line15" />
      <div className="list-of-chats">
        <div className="list6">
          <div className="avatar-online2" />
          <div className="avatar-online3" />
        </div>
        <div className="chat-avatar-online-text">
          <Chat
            avatarOnline="/avatar-online.svg"
            tittle="Team Lead"
            tittle1="08:30"
            message="Change the theme of design"
          />
          <Chat
            avatarOnline="/avatar-online-1.svg"
            tittle="Client"
            tittle1="07:00"
            message="Check the authentication flow"
            propWidth="207px"
            propFlex="1"
            propWidth1="unset"
            propAlignSelf="stretch"
            propAlignSelf1="stretch"
          />
          <Chat
            avatarOnline="/avatar-online-21.svg"
            tittle="Manager"
            tittle1="23/11"
            message="Change the design allignments"
            propWidth="207px"
            propFlex="1"
            propWidth1="unset"
            propAlignSelf="stretch"
            propAlignSelf1="stretch"
          />
          <button className="buttonmediumsecondary1">
            <b className="button2">See All</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message1;
