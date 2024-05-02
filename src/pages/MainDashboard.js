import { useState, useCallback } from "react";
import "antd/dist/antd.min.css";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import { DatePicker } from "antd";
import Sidebar1 from "../components/Sidebar";
import CFrame from "../components/CFrame";
import Item1 from "../components/Item1";
import SearchBox from "../components/SearchBox";
import { useNavigate } from "react-router-dom";
import Chat1 from "../components/Chat1";
import "./MainDashboard.css";

const MainDashboard = () => {
  const [checkIconChecked, setCheckIconChecked] = useState(true);
  const navigate = useNavigate();

  const onItemContainerClick = useCallback(() => {
    // Please sync "project overview" to the project
  }, []);

  const onDateDefaultContainer22Click = useCallback(() => {
    navigate("/21-dashboard-project-management");
  }, [navigate]);

  return (
    <div className="main-dashboard">
      <Sidebar1 />
      <div className="line5" />
      <main className="content">
        <CFrame />
        <section className="item2">
          <div className="create">
            <div className="text7">
              <div className="recent-projects">
                <div className="background" />
                <div className="button-medium-secondary1">
                  <b className="recent-projects1">Recent Projects</b>
                  <img
                    className="dots-icon2"
                    loading="eager"
                    alt=""
                    src="/dots2@2x.png"
                  />
                </div>
                <div className="task" />
                <div className="group">
                  <Item1
                    hiphonic="Website Design"
                    dots="/dots-1@2x.png"
                    dayFrame="55%"
                    prop="/15"
                    avatar="/avatar@2x.png"
                    avatar1="/avatar-11@2x.png"
                    userFrame="+2"
                    onItemContainerClick={onItemContainerClick}
                  />
                  <Item1
                    hiphonic="SEO Analytics"
                    dots="/dots.svg"
                    dayFrame="30%"
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
                  <div className="item3">
                    <div className="background1" />
                    <div className="dibhub-app-parent">
                      <b className="dibhub-app">Web App</b>
                      <img className="dots-icon3" alt="" src="/dots.svg" />
                    </div>
                    <div className="progress">
                      <div className="text8">
                        <div className="progress1">Progress</div>
                        <div className="div">89%</div>
                      </div>
                      <div className="indicator">
                        <div className="indicator-child" />
                        <div className="indicator-item" />
                      </div>
                    </div>
                    <div className="task-parent">
                      <div className="task1">
                        <img
                          className="tick-square-icon"
                          alt=""
                          src="/tick-square.svg"
                        />
                        <div className="div1">
                          <span className="span1">40</span>
                          <span className="span2">/55</span>
                        </div>
                      </div>
                      <div className="user2">
                        <img
                          className="avatar-icon6"
                          alt=""
                          src="/avatar-4@2x.png"
                        />
                        <img
                          className="avatar-icon7"
                          alt=""
                          src="/avatar-5@2x.png"
                        />
                        <div className="ellipse-parent">
                          <div className="ellipse-div" />
                          <div className="div2">+2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="line-frame">
                <div className="activity2">
                  <div className="background2" />
                  <div className="tittle-frame">
                    <div className="date-active-frame">
                      <b className="activity3">Activity</b>
                      <FormControl
                        className="week1"
                        variant="filled"
                        sx={{
                          borderRadius: "0px 0px 0px 0px",
                          width: "62px",
                          height: "19px",
                          m: 0,
                          p: 0,
                          "& .MuiInputBase-root": {
                            m: 0,
                            p: 0,
                            minHeight: "19px",
                            justifyContent: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInputLabel-root": {
                            m: 0,
                            p: 0,
                            minHeight: "19px",
                            display: "inline-flex",
                          },
                          "& .MuiMenuItem-root": {
                            m: 0,
                            p: 0,
                            height: "19px",
                            display: "inline-flex",
                          },
                          "& .MuiSelect-select": {
                            m: 0,
                            p: 0,
                            height: "19px",
                            alignItems: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInput-input": { m: 0, p: 0 },
                          "& .MuiInputBase-input": {
                            textAlign: "left",
                            p: "0 !important",
                          },
                        }}
                      >
                        <InputLabel color="primary" />
                        <Select color="primary" disableUnderline displayEmpty />
                        <FormHelperText />
                      </FormControl>
                    </div>
                    <div className="frame-parent2">
                      <div className="parent">
                        <div className="div3">100%</div>
                        <div className="line6" />
                      </div>
                      <div className="frame-parent3">
                        <div className="frame-wrapper">
                          <div className="container">
                            <div className="div4">70%</div>
                            <div className="div5">50%</div>
                            <div className="div6">30%</div>
                            <div className="div7">0%</div>
                          </div>
                        </div>
                        <div className="line-parent">
                          <div className="line7" />
                          <SearchBox
                            lineChart="/line-chart1.svg"
                            lineIndicator="/line-indicator1.svg"
                            propAlignSelf="unset"
                            propFlex="1"
                            propMarginLeft="-318px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tasksummary">
                    <div className="day1">
                      <div className="sun1">Sun</div>
                      <div className="mon1">Mon</div>
                      <div className="tue1">Tue</div>
                      <div className="wed1">Wed</div>
                      <div className="thu1">Thu</div>
                      <div className="fri1">Fri</div>
                      <div className="sat1">Sat</div>
                    </div>
                  </div>
                </div>
                <div className="task-summary">
                  <div className="background3" />
                  <div className="task-frames">
                    <b className="task-summary1">Task Summary</b>
                    <img className="dots-icon4" alt="" src="/dots.svg" />
                  </div>
                  <div className="task-frames1">
                    <div className="projects">
                      <div className="background4" />
                      <img className="icon2" alt="" src="/icon.svg" />
                      <div className="icon-frames">
                        <div className="projects1">Projects</div>
                        <b className="projects-assigned-closed">40</b>
                      </div>
                    </div>
                    <div className="assigned">
                      <div className="background5" />
                      <img className="icon3" alt="" src="/icon-21.svg" />
                      <div className="assigned-parent">
                        <div className="assigned1">Assigned</div>
                        <b className="b">79</b>
                      </div>
                    </div>
                    <div className="closed">
                      <div className="background6" />
                      <img className="icon4" alt="" src="/icon-2.svg" />
                      <div className="closed-parent">
                        <div className="closed1">Closed</div>
                        <b className="b1">89</b>
                      </div>
                    </div>
                  </div>
                  <div className="completion-rate">
                    <div className="on-time-completion-rate-parent">
                      <div className="on-time-completion-rate">
                        On-time Completion Rate
                      </div>
                      <div className="project-summary-parent">
                        <b className="project-summary">95%</b>
                        <div className="div8">+2,5%</div>
                      </div>
                    </div>
                    <img
                      className="completion-rate-child"
                      loading="eager"
                      alt=""
                      src="/group-281.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="task-items-frame">
                <div className="text9">
                  <div className="task-today-10-container1">
                    <b className="task-today1">{`Task Today `}</b>
                    <span className="span3">(10)</span>
                  </div>
                  <div className="see-all-parent">
                    <div className="see-all1">See All</div>
                    <img
                      className="chevron-right-icon1"
                      loading="eager"
                      alt=""
                      src="/chevronright1.svg"
                    />
                  </div>
                </div>
                <div className="item4">
                  <div className="background7" />
                  <div className="task-items-frame1">
                    <div className="checkbox2">
                      <div className="checkbox-child" />
                      <input
                        className="check"
                        checked={checkIconChecked}
                        type="checkbox"
                        onChange={(event) =>
                          setCheckIconChecked(event.target.checked)
                        }
                      />
                    </div>
                    <div className="create-userflow-for1">
                      Create userflow for web application design
                    </div>
                  </div>
                  <div className="task-items-frame2">
                    <div className="in-review-in-progress-frame">
                      <div className="in-review1">In Review</div>
                    </div>
                    <img
                      className="user-icon5"
                      loading="eager"
                      alt=""
                      src="/user2.svg"
                    />
                    <img className="dots-icon5" alt="" src="/dots.svg" />
                  </div>
                </div>
                <div className="item5">
                  <div className="background8" />
                  <div className="checkbox-group">
                    <input className="checkbox3" type="checkbox" />
                    <div className="homepage-design-for1">
                      Homepage design for web application
                    </div>
                  </div>
                  <div className="frame-parent4">
                    <button className="in-progress-container">
                      <div className="in-progress1">In Progress</div>
                    </button>
                    <img className="user-icon6" alt="" src="/user-1.svg" />
                    <img className="dots-icon6" alt="" src="/dots.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="calendar-parent">
              <div className="calendar">
                <DatePicker
                  className="calendar-title"
                  allowClear={false}
                  bordered={false}
                />
                <div className="date-frame">
                  <div className="weekday-labels-frame" />
                </div>
                <div className="date-frame-lines">
                  <div className="date">
                    <div className="weekday">
                      <div className="mo">Mo</div>
                    </div>
                    <div className="date-default">
                      <div className="div9">1</div>
                    </div>
                    <div className="weekday1">
                      <div className="tu">Tu</div>
                    </div>
                    <div className="date-default1">
                      <div className="div10">2</div>
                    </div>
                    <div className="weekday2">
                      <div className="we">We</div>
                    </div>
                    <div className="date-default2">
                      <div className="div11">3</div>
                    </div>
                    <div className="weekday3">
                      <div className="th">Th</div>
                    </div>
                    <div className="date-default3">
                      <div className="div12">4</div>
                    </div>
                    <div className="weekday4">
                      <div className="fr">Fr</div>
                    </div>
                    <div className="date-default4">
                      <div className="div13">5</div>
                    </div>
                    <div className="weekday5">
                      <div className="sa">Sa</div>
                    </div>
                    <div className="date-default5">
                      <div className="div14">6</div>
                    </div>
                    <div className="weekday6">
                      <div className="su">Su</div>
                    </div>
                    <div className="date-default6">
                      <div className="div15">7</div>
                    </div>
                    <div className="date-default7">
                      <div className="div16">8</div>
                    </div>
                    <div className="date-default8">
                      <div className="div17">15</div>
                    </div>
                    <div className="date-default9">
                      <div className="div18">9</div>
                    </div>
                    <div className="date-default10">
                      <div className="div19">16</div>
                    </div>
                    <div className="date-default11">
                      <div className="div20">10</div>
                    </div>
                    <div className="date-default12">
                      <div className="div21">17</div>
                    </div>
                    <div className="date-default13">
                      <div className="div22">11</div>
                    </div>
                    <div className="date-active">
                      <div className="div23">18</div>
                    </div>
                    <div className="date-default14">
                      <div className="div24">12</div>
                    </div>
                    <div className="date-default15">
                      <div className="div25">19</div>
                    </div>
                    <div className="date-default16">
                      <div className="div26">13</div>
                    </div>
                    <div className="date-default17">
                      <div className="div27">20</div>
                    </div>
                    <div className="date-default18">
                      <div className="div28">14</div>
                    </div>
                    <div className="date-default19">
                      <div className="div29">21</div>
                    </div>
                    <div className="date-default20">
                      <div className="div30">22</div>
                    </div>
                    <div className="date-default21">
                      <div className="div31">29</div>
                    </div>
                    <div
                      className="date-default22"
                      onClick={onDateDefaultContainer22Click}
                    >
                      <b className="b2">23</b>
                    </div>
                    <div className="date-default23">
                      <div className="div32">30</div>
                    </div>
                    <div className="date-default24">
                      <div className="div33">24</div>
                    </div>
                    <div className="date-inactive">
                      <div className="div34">1</div>
                    </div>
                    <div className="date-default25">
                      <div className="div35">25</div>
                    </div>
                    <div className="date-inactive1">
                      <div className="div36">2</div>
                    </div>
                    <div className="date-default26">
                      <div className="div37">26</div>
                    </div>
                    <div className="date-inactive2">
                      <div className="div38">3</div>
                    </div>
                    <div className="date-default27">
                      <div className="div39">27</div>
                    </div>
                    <div className="date-inactive3">
                      <div className="div40">4</div>
                    </div>
                    <div className="date-default28">
                      <div className="div41">28</div>
                    </div>
                    <div className="date-inactive4">
                      <div className="div42">5</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="message23">
                <div className="tittle-wrapper">
                  <b className="tittle33">Alerts</b>
                </div>
                <div className="line8" />
                <div className="chat-parent">
                  <Chat1
                    avatarOnline="/avatar-online1.svg"
                    tittle="Team lead"
                    tittle1="08:30"
                    message="Change the theme of design"
                  />
                  <div className="avatar-online" />
                  <Chat1
                    avatarOnline="/avatar-online-11.svg"
                    tittle="Client"
                    tittle1="07:00"
                    message="Check the authentication flow"
                  />
                  <div className="avatar-online1" />
                  <Chat1
                    avatarOnline="/avatar-online-211.svg"
                    tittle="Manager"
                    tittle1="23/11"
                    message="Change the design allignments"
                  />
                </div>
                <button className="buttonmediumsecondary">
                  <b className="button1">See All</b>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="whatsapp-image-2023-10-25-at-3" />
    </div>
  );
};

export default MainDashboard;
