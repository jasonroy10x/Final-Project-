import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SidebarLogoContainer.css";

const SidebarLogoContainer = () => {
  const navigate = useNavigate();

  const onDashboardClick = useCallback(() => {
    navigate("/main-dashboard");
  }, [navigate]);

  const onMyTasksContainerClick = useCallback(() => {
    // Please sync "2.3 Space - List" to the project
  }, []);

  const onInboxContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPlusIconClick = useCallback(() => {
    // Please sync "project creation" to the project
  }, []);

  return (
    <div className="sidebar-logo-container">
      <div className="sidebar1">
        <div className="logo-hiphonic">
          <div className="sidebar-divider">
            <div className="sidebar-menu-item">
              <div className="logo2">
                <img className="exclude-icon2" alt="" />
                <b className="hiphonic3" />
              </div>
            </div>
            <div className="frame-dashboard-title" />
          </div>
          <div className="menu3">
            <div className="menu-dashboard">
              <b className="menu4">MENU</b>
            </div>
            <div className="list7">
              <button className="dashboard5" onClick={onDashboardClick}>
                <img className="layout-grid-icon2" alt="" />
                <b className="dashboard6">Dashboard</b>
              </button>
              <div className="my-tasks4" onClick={onMyTasksContainerClick}>
                <img
                  className="tick-square-icon5"
                  alt=""
                  src="/tick-square-3.svg"
                />
                <div className="my-tasks5">My Tasks</div>
              </div>
              <div className="inbox3" onClick={onInboxContainerClick}>
                <img
                  className="message-circle-icon2"
                  alt=""
                  src="/messagecircle1.svg"
                />
                <div className="message30">Message</div>
              </div>
              <div className="goals6">
                <img className="trophy-icon2" alt="" src="/trophy.svg" />
                <div className="goals7">Goals</div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-background-rectangle">
          <div className="line16" />
          <div className="projects6">
            <div className="tittle48">
              <b className="projects7">PROJECTS</b>
              <img
                className="plus-icon2"
                alt=""
                src="/plus.svg"
                onClick={onPlusIconClick}
              />
            </div>
            <div className="list8">
              <div className="project8">
                <div className="name12">
                  <div className="ellipse-group1" />
                  <div className="website-design2">Web Design</div>
                </div>
                <img className="dots-icon17" alt="" src="/dots1.svg" />
              </div>
              <div className="project9">
                <div className="name13">
                  <div className="name-child3" />
                  <div className="seo-analythics2">SEO Analytics</div>
                </div>
                <img className="dots-icon18" alt="" src="/dots1.svg" />
              </div>
              <div className="project10">
                <div className="name14">
                  <div className="name-child4" />
                  <div className="hiphonic-app2">Web Application</div>
                </div>
                <img className="dots-icon19" alt="" src="/dots1.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="s-e-o-analysis-project">
          <div className="goals8">
            <img className="settings-icon2" alt="" src="/settings.svg" />
            <div className="settings2">Settings</div>
          </div>
          <div className="user-avatar-chat" />
          <div className="project11">
            <div className="name15">
              <img className="moon-stars-icon2" alt="" src="/moonstars.svg" />
              <div className="dark-mode2">Dark Mode</div>
            </div>
            <div className="switches2">
              <div className="search-default" />
            </div>
          </div>
        </div>
      </div>
      <b className="dashboard7">Dashboard</b>
      <img className="layout-grid-icon3" alt="" src="/layoutgrid-2.svg" />
    </div>
  );
};

export default SidebarLogoContainer;
