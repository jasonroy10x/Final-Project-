import { useMemo } from "react";
import "./Item1.css";

const Item1 = ({
  hiphonic,
  dots,
  dayFrame,
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
  const background1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const hiphonic1Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const progress1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const taskSummaryFrameStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
      width: propWidth,
    };
  }, [propBackgroundColor2, propWidth]);

  const task1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor3,
      gap: propGap,
    };
  }, [propBackgroundColor3, propGap]);

  const inProgressReviewFrameStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor4,
      border: propBorder,
    };
  }, [propBackgroundColor4, propBorder]);

  const userFrame1Style = useMemo(() => {
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
    <div className="item8" onClick={onItemContainerClick}>
      <div className="background12" style={background1Style} />
      <div className="projectsassigned">
        <b className="hiphonic5" style={hiphonic1Style}>
          {hiphonic}
        </b>
        <img className="dots-icon26" alt="" src={dots} />
      </div>
      <div className="progress6" style={progress1Style}>
        <div className="text15">
          <div className="progress7">Progress</div>
          <div className="day-frame">{dayFrame}</div>
        </div>
        <div className="indicator3">
          <div className="task-summary-frame" />
          <div className="task-summary-frame1" style={taskSummaryFrameStyle} />
        </div>
      </div>
      <div className="group-projects">
        <div className="task4" style={task1Style}>
          <img className="tick-square-icon8" alt="" src="/tick-square.svg" />
          <div className="calendar-frame">
            <span className="span8">8</span>
            <span className="span9">{prop}</span>
          </div>
        </div>
        <div className="user8">
          <img className="avatar-icon14" alt="" src={avatar} />
          <img className="avatar-icon15" alt="" src={avatar1} />
          <div className="in-progress-review-frame-parent">
            <div
              className="in-progress-review-frame"
              style={inProgressReviewFrameStyle}
            />
            <div className="user-frame2" style={userFrame1Style}>
              {userFrame}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item1;
