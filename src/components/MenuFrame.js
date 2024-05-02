import { useCallback } from "react";
import "./MenuFrame.css";

const MenuFrame = () => {
  const onMenuFrameContainerClick = useCallback(() => {
    // Please sync "2.7 conference" to the project
  }, []);

  return (
    <div className="menu-frame" onClick={onMenuFrameContainerClick}>
      <div className="projects-frame">
        <div className="logo-frame" />
        <b className="tittle44">Team Meeting</b>
      </div>
      <div className="plus-symbol">
        <div className="menu-item">
          <div className="tittle-frame1" />
          <div className="tittle45">
            <b className="tittle46">Manager Meeting</b>
          </div>
        </div>
      </div>
      <div className="chat-avatar1">
        <div className="frame-with-three-frames" />
        <b className="tittle47">Client Meeting</b>
      </div>
    </div>
  );
};

export default MenuFrame;
