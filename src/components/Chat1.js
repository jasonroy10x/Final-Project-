import "./Chat1.css";

const Chat1 = ({ avatarOnline, tittle, tittle1, message }) => {
  return (
    <div className="chat8">
      <img
        className="avatar-online-icon7"
        loading="eager"
        alt=""
        src={avatarOnline}
      />
      <div className="text16">
        <div className="tittle51">
          <b className="tittle52">{tittle}</b>
          <div className="tittle53">{tittle1}</div>
        </div>
        <div className="message33">{message}</div>
      </div>
    </div>
  );
};

export default Chat1;
