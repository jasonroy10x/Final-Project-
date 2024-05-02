import { useMemo } from "react";
import "./Item.css";

const Item = ({
  hiphonic,
  dashboardText,
  prop,
  avatar,
  avatar1,
  userFrame,
  propBackgroundColor,
  propColor,
  propBackgroundColor1,
  propBackgroundColor2,
  propWidth,
  propBackgroundColor3,
  propGap,
  propBackgroundColor4,
  propBorder,
  propColor1,
  propBackground,
  propWebkitBackgroundClip,
  propWebkitTextFillColor,
  onItemContainerClick,
}) => {
  const backgroundStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const hiphonicStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const progressStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const websiteDesignProjectStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
      width: propWidth,
    };
  }, [propBackgroundColor2, propWidth]);

  const taskStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor3,
      gap: propGap,
    };
  }, [propBackgroundColor3, propGap]);

  const searchIconFrameStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor4,
      border: propBorder,
    };
  }, [propBackgroundColor4, propBorder]);

  const userFrameStyle = useMemo(() => {
    return {
      color: propColor1,
      background: propBackground,
      webkitBackgroundClip: propWebkitBackgroundClip,
      webkitTextFillColor: propWebkitTextFillColor,
    };
  }, [
    propColor1,
    propBackground,
    propWebkitBackgroundClip,
    propWebkitTextFillColor,
  ]);

  return (
    <div className="item6" onClick={onItemContainerClick}>
      <div className="background9" style={backgroundStyle} />
      <div className="button-secondary-instance">
        <b className="hiphonic1" style={hiphonicStyle}>
          {hiphonic}
        </b>
        <img className="dots-icon11" alt="" src="/dots.svg" />
      </div>
      <div className="progress2" style={progressStyle}>
        <div className="text11">
          <div className="progress3">Progress</div>
          <div className="dashboard-text">{dashboardText}</div>
        </div>
        <div className="indicator1">
          <div className="inbox-message-circle" />
          <div
            className="website-design-project"
            style={websiteDesignProjectStyle}
          />
        </div>
      </div>
      <div className="s-e-o-analythics-project">
        <div className="task2" style={taskStyle}>
          <img
            className="tick-square-icon2"
            loading="eager"
            alt=""
            src="/tick-square.svg"
          />
          <div className="frame-search-default-container">
            <span className="span4">8</span>
            <span className="span5">{prop}</span>
          </div>
        </div>
        <div className="user4">
          <img className="avatar-icon9" alt="" src={avatar} />
          <img className="avatar-icon10" alt="" src={avatar1} />
          <div className="search-icon-frame-parent">
            <div className="search-icon-frame" style={searchIconFrameStyle} />
            <div className="user-frame1" style={userFrameStyle}>
              {userFrame}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
