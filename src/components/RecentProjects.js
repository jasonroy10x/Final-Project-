import { useCallback } from "react";
import Item from "./Item";
import "./RecentProjects.css";

const RecentProjects = () => {
  const onItemContainerClick = useCallback(() => {
    // Please sync "project overview" to the project
  }, []);

  return (
    <div className="recent-projects2">
      <div className="background10" />
      <div className="layout-grid1">
        <b className="recent-projects3">Recent Projects</b>
        <img className="dots-icon12" alt="" src="/dots-3.svg" />
      </div>
      <div className="dashboard-frame1" />
      <div className="search-instance">
        <Item
          hiphonic="Website Design"
          dashboardText="55%"
          prop="/15"
          avatar="/avatar1@2x.png"
          avatar1="/avatar-11@2x.png"
          userFrame="+2"
          onItemContainerClick={onItemContainerClick}
        />
        <Item
          hiphonic="SEO Analytics"
          dashboardText="30%"
          prop="/40"
          avatar="/avatar-2@2x.png"
          avatar1="/avatar-3@2x.png"
          userFrame="+3"
          propBackgroundColor="rgba(152, 185, 255, 0.2)"
          propColor="#0f172a"
          propBackgroundColor1="unset"
          propBackgroundColor2="#2563eb"
          propWidth="63px"
          propBackgroundColor3="unset"
          propGap="1px"
          propBackgroundColor4="1px solid #e2e8f0"
          propBorder="0px solid var(--greyscale-50)"
          propColor1="unset"
          propBackground="linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #64748b"
          propWebkitBackgroundClip="unset"
          propWebkitTextFillColor="unset"
        />
        <div className="item7">
          <div className="background11" />
          <div className="dibhub-app-group">
            <b className="dibhub-app1">Web App</b>
            <img className="dots-icon13" alt="" src="/dots.svg" />
          </div>
          <div className="progress4">
            <div className="text12">
              <div className="progress5">Progress</div>
              <div className="div78">89%</div>
            </div>
            <div className="indicator2">
              <div className="indicator-inner" />
              <div className="rectangle-div" />
            </div>
          </div>
          <div className="task-group">
            <div className="task3">
              <img
                className="tick-square-icon3"
                alt=""
                src="/tick-square.svg"
              />
              <div className="div79">
                <span className="span6">40</span>
                <span className="span7">/55</span>
              </div>
            </div>
            <div className="user5">
              <img className="avatar-icon11" alt="" src="/avatar-4@2x.png" />
              <img className="avatar-icon12" alt="" src="/avatar-5@2x.png" />
              <div className="ellipse-group">
                <div className="frame-child4" />
                <div className="div80">+2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
