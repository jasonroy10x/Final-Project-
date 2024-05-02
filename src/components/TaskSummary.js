import "./TaskSummary.css";

const TaskSummary = () => {
  return (
    <div className="task-summary2">
      <div className="avatar-instance">
        <b className="task-summary3">Task Summary</b>
        <img className="dots-icon10" alt="" src="/dots.svg" />
      </div>
      <div className="message-frame">
        <div className="projects2">
          <div className="icon-wrapper">
            <img className="icon6" loading="eager" alt="" src="/icon.svg" />
          </div>
          <div className="layout-grid-frame">
            <div className="projects3">Projects</div>
            <b className="my-tasks-frame">40</b>
          </div>
        </div>
        <div className="assigned2">
          <img className="icon7" alt="" src="/icon-1.svg" />
          <div className="assigned-group">
            <div className="assigned3">Assigned</div>
            <b className="b3">79</b>
          </div>
        </div>
        <div className="closed2">
          <img className="icon8" alt="" src="/icon-2.svg" />
          <div className="closed-group">
            <div className="closed3">Closed</div>
            <b className="b4">89</b>
          </div>
        </div>
      </div>
      <div className="projects4">
        <img className="icon9" alt="" src="/icon.svg" />
        <div className="projects5">Projects</div>
        <b className="b5">40</b>
      </div>
      <div className="completion-rate1">
        <div className="ontime">
          <div className="on-time-completion-rate1">
            On-time Completion Rate
          </div>
          <div className="plus-instance">
            <b className="logo-instance">95%</b>
            <div className="sidebar-menu-frame">+2,5%</div>
          </div>
        </div>
        <img
          className="completion-rate-item"
          loading="eager"
          alt=""
          src="/group-28.svg"
        />
      </div>
    </div>
  );
};

export default TaskSummary;
