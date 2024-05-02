import { useCallback } from "react";
import "./FrameComponent.css";

const FrameComponent = () => {
  const onUserContainerClick = useCallback(() => {
    // Please sync "Personal info" to the project
  }, []);

  return (
    <header className="header-group">
      <div className="header2">
        <div className="message-frame-parent">
          <div className="message-frame2">
            <div className="navigation">
              <div className="sidebar-frame">
                <div className="logo1">
                  <img className="exclude-icon1" loading="eager" alt="" />
                  <b className="hiphonic2">Hiphonic</b>
                </div>
              </div>
              <div className="layoutgrid">
                <div className="plus-frame" />
              </div>
              <div className="project-name-ellipse">
                <div className="website-design-project1">
                  <b className="menu2">MENU</b>
                </div>
                <div className="list4">
                  <button className="dashboard2">
                    <img className="layout-grid-icon1" alt="" />
                    <b className="dashboard3">Dashboard</b>
                  </button>
                  <div className="my-tasks2">
                    <img
                      className="tick-square-icon4"
                      alt=""
                      src="/tick-square-3.svg"
                    />
                    <div className="my-tasks3">My Tasks</div>
                  </div>
                  <div className="inbox2">
                    <img
                      className="message-circle-icon1"
                      loading="eager"
                      alt=""
                      src="/messagecircle.svg"
                    />
                    <div className="message27">Message</div>
                  </div>
                  <div className="goals3">
                    <img
                      className="trophy-icon1"
                      loading="eager"
                      alt=""
                      src="/trophy.svg"
                    />
                    <div className="goals4">Goals</div>
                  </div>
                </div>
              </div>
              <div className="dashboard-frame2" />
              <div className="search-box1">
                <div className="tittle39">
                  <b className="space2">SPACE</b>
                  <img
                    className="plus-icon1"
                    loading="eager"
                    alt=""
                    src="/plus.svg"
                  />
                </div>
                <div className="list5">
                  <div className="project4">
                    <div className="name6">
                      <div className="name-item" />
                      <div className="website-design1">Website Design</div>
                    </div>
                    <img className="dots-icon14" alt="" src="/dots1.svg" />
                  </div>
                  <div className="project5">
                    <div className="name7">
                      <div className="name-child1" />
                      <div className="seo-analythics1">SEO Analythics</div>
                    </div>
                    <img className="dots-icon15" alt="" src="/dots1.svg" />
                  </div>
                  <div className="project6">
                    <div className="name8">
                      <div className="name-child2" />
                      <div className="hiphonic-app1">Hiphonic App</div>
                    </div>
                    <img className="dots-icon16" alt="" src="/dots1.svg" />
                  </div>
                </div>
              </div>
              <div className="dashboard-title1">
                <div className="goals5">
                  <img
                    className="settings-icon1"
                    loading="eager"
                    alt=""
                    src="/settings.svg"
                  />
                  <div className="settings1">Settings</div>
                </div>
                <div className="line14" />
                <div className="project7">
                  <div className="name9">
                    <img
                      className="moon-stars-icon1"
                      loading="eager"
                      alt=""
                      src="/moonstars.svg"
                    />
                    <div className="dark-mode1">Dark Mode</div>
                  </div>
                  <div className="switches1">
                    <div className="settings-switches" />
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-layout" />
          </div>
          <h1 className="dashboard4">Dashboard</h1>
        </div>
        <div className="dashboard-text1">
          <div className="search-bar">
            <div className="searchdefault1">
              <img className="search-icon3" alt="" src="/search.svg" />
              <input className="search1" placeholder="Search..." type="text" />
            </div>
          </div>
          <img className="icon10" alt="" src="/icon-4.svg" />
          <div className="user6" onClick={onUserContainerClick}>
            <div className="avatar-group">
              <img className="avatar-icon13" alt="" src="/avatar-61@2x.png" />
              <div className="name-group">
                <b className="name10">User account</b>
                <div className="name11">Role</div>
              </div>
            </div>
            <img
              className="chevron-down-icon3"
              alt=""
              src="/chevrondown-1.svg"
            />
          </div>
        </div>
      </div>
      <img
        className="user-fill-1-2"
        loading="eager"
        alt=""
        src="/userfill-1-2.svg"
      />
    </header>
  );
};

export default FrameComponent;
