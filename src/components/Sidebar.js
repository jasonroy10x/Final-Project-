import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar1.css";

const Sidebar1 = () => {
  const navigate = useNavigate();

  const onDashboardClick = useCallback(() => {
    navigate("/21-dashboard-project-management");
  }, [navigate]);

  const onMyTasksContainerClick = useCallback(() => {
    // Please sync "2.3 Space - List" to the project
  }, []);

  const onInboxContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPlusContainerClick = useCallback(() => {
    // Please sync "project creation" to the project
  }, []);

  return (
    <div className="sidebar2">
      <div className="title">
        <div className="day2">
          <input className="line17" type="text" />
          <div className="create-flow" />
        </div>
        <div className="menu5">
          <div className="review">
            <b className="menu6">MENU</b>
          </div>
          <div className="list9">
            <button className="dashboard8" onClick={onDashboardClick}>
              <img
                className="layout-grid-icon4"
                alt=""
                src="/layoutgrid-2.svg"
              />
              <b className="dashboard9">Dashboard</b>
            </button>
            <div className="my-tasks6" onClick={onMyTasksContainerClick}>
              <img
                className="tick-square-icon6"
                loading="eager"
                alt=""
                src="/tick-square-3.svg"
              />
              <div className="my-tasks7">My Tasks</div>
            </div>
            <div className="inbox4" onClick={onInboxContainerClick}>
              <img
                className="message-circle-icon3"
                loading="eager"
                alt=""
                src="/messagecircle.svg"
              />
              <div className="message31">Message</div>
            </div>
            <div className="goals9">
              <img className="trophy-icon3" alt="" src="/trophy.svg" />
              <div className="goals10">Goals</div>
            </div>
          </div>
        </div>
      </div>
      <div className="assigned4">
        <div className="closed4" />
        <div className="projects8">
          <div className="tittle49">
            <b className="projects9">PROJECTS</b>
            <div className="plus" onClick={onPlusContainerClick}>
              <img className="group-icon1" alt="" src="/group.svg" />
            </div>
          </div>
          <div className="list10">
            <div className="project12">
              <div className="name16">
                <div className="frame4" />
                <div className="website-design3">Web Design</div>
              </div>
              <img className="dots-icon20" alt="" src="/dots1.svg" />
            </div>
            <div className="project13">
              <div className="name17">
                <div className="name-child5" />
                <div className="seo-analythics3">SEO Analytics</div>
              </div>
              <img className="dots-icon21" alt="" src="/dots1.svg" />
            </div>
            <div className="project14">
              <div className="name18">
                <div className="name-child6" />
                <div className="hiphonic-app3">Web Application</div>
              </div>
              <img className="dots-icon22" alt="" src="/dots1.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="check1">
        <div className="goals11">
          <img
            className="settings-icon3"
            loading="eager"
            alt=""
            src="/settings.svg"
          />
          <div className="settings3">Settings</div>
        </div>
        <div className="projects-icon-frame" />
        <div className="project15">
          <div className="name19">
            <img
              className="moon-stars-icon3"
              loading="eager"
              alt=""
              src="/moonstars.svg"
            />
            <div className="dark-mode3">Dark Mode</div>
          </div>
          <div className="switches3">
            <div className="button-instance" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar1;
