import { useMemo } from "react";
import "./SearchBox.css";

const SearchBox = ({
  lineChart,
  lineIndicator,
  propAlignSelf,
  propFlex,
  propMarginLeft,
}) => {
  const searchBoxStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      marginLeft: propMarginLeft,
    };
  }, [propAlignSelf, propFlex, propMarginLeft]);

  return (
    <div className="search-box" style={searchBoxStyle}>
      <div className="search-icon2">
        <div className="user-frame">
          <div className="avatar-instance1">
            <b className="tasks">5 tasks</b>
            <div className="almost-completed">Almost completed</div>
          </div>
        </div>
        <div className="user-fill1" />
      </div>
      <div className="message-frame1">
        <div className="list-frame4" />
      </div>
      <img className="line-chart-icon" alt="" src={lineChart} />
      <img
        className="line-indicator-icon"
        loading="eager"
        alt=""
        src={lineIndicator}
      />
      <div className="button-medium-secondary3" />
    </div>
  );
};

export default SearchBox;
