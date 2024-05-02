import Calendar from "../components/Calendar";
import TaskSummary from "../components/TaskSummary";
import SearchBox from "../components/SearchBox";
import RecentProjects from "../components/RecentProjects";
import FrameComponent from "../components/FrameComponent";
import Message1 from "../components/Message";
import MenuFrame from "../components/MenuFrame";
import SidebarLogoContainer from "../components/SidebarLogoContainer";
import "./DashboardProjectManagement.css";

const DashboardProjectManagement = () => {
  return (
    <div className="dashboard-project-management">
      <Calendar />
      <TaskSummary />
      <div className="text6">
        <div className="task-today-10-container">
          <b className="task-today">{`Task Today `}</b>
          <span className="span">(10)</span>
        </div>
        <div className="message-area">
          <div className="see-all">See All</div>
          <img className="chevron-right-icon" alt="" />
        </div>
      </div>
      <div className="item">
        <div className="search-component">
          <div className="checkbox">
            <div className="message-area1" />
            <img className="check-icon1" alt="" src="/check.svg" />
          </div>
          <div className="create-userflow-for">
            Create userflow for web application design
          </div>
        </div>
        <div className="menu-list">
          <div className="layout-grid">
            <div className="in-review">In Review</div>
          </div>
          <img className="user-icon3" loading="eager" alt="" src="/user2.svg" />
          <img className="dots-icon" alt="" src="/dots.svg" />
        </div>
      </div>
      <div className="item1">
        <div className="checkbox-parent">
          <input className="checkbox1" type="checkbox" />
          <div className="homepage-design-for">
            Homepage design for web application
          </div>
        </div>
        <div className="frame-parent1">
          <button className="in-progress-wrapper">
            <div className="in-progress">In Progress</div>
          </button>
          <img className="user-icon4" alt="" src="/user-1.svg" />
          <img className="dots-icon1" alt="" src="/dots.svg" />
        </div>
      </div>
      <div className="activity">
        <div className="inbox">
          <div className="projects-list">
            <b className="activity1">Activity</b>
            <div className="week">
              <div className="weekly">Weekly</div>
              <img className="chevron-down-icon1" alt="" />
            </div>
          </div>
          <div className="dashboard-frame">
            <div className="frame-searchdefault">
              <div className="icon1">100%</div>
              <div className="user1" />
            </div>
            <div className="chevron-down">
              <div className="user-fill">
                <div className="message-title">
                  <div className="list-frame">70%</div>
                  <div className="list-frame1">50%</div>
                  <div className="list-frame2">30%</div>
                  <div className="list-frame3">0%</div>
                </div>
              </div>
              <div className="button-medium-secondary">
                <SearchBox
                  lineChart="/line-chart.svg"
                  lineIndicator="/line-indicator.svg"
                />
                <div className="rectangle-frame" />
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-instance">
          <div className="day">
            <div className="sun">Sun</div>
            <div className="mon">Mon</div>
            <div className="tue">Tue</div>
            <div className="wed">Wed</div>
            <div className="thu">Thu</div>
            <div className="fri">Fri</div>
            <div className="sat">Sat</div>
          </div>
        </div>
      </div>
      <RecentProjects />
      <FrameComponent />
      <Message1 />
      <div className="dashboard-title">
        <MenuFrame />
      </div>
      <div className="line4" />
      <SidebarLogoContainer />
      <img className="dash-and-pro" alt="" src="/dash-and-pro@2x.png" />
      <section className="new-page" />
      <section className="new-page1" />
    </div>
  );
};

export default DashboardProjectManagement;
