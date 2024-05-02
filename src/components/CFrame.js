import { useCallback } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import "./CFrame.css";

const CFrame = () => {
  const onUserClick = useCallback(() => {
    // Please sync "Personal info" to the project
  }, []);

  return (
    <section className="c-frame">
      <header className="completion-rate-frame">
        <div className="header3">
          <div className="navigation1">
            <div className="in-review-in-progress-frame1">
              <div className="logo3">
                <img
                  className="exclude-icon3"
                  loading="eager"
                  alt=""
                  src="/exclude@2x.png"
                />
                <b className="hiphonic4">Hiphonic</b>
              </div>
            </div>
            <div className="line-wrapper">
              <div className="line18" />
            </div>
            <div className="frame-parent5">
              <div className="menu-container">
                <b className="menu7">MENU</b>
              </div>
              <div className="list11">
                <button className="dashboard10">
                  <img
                    className="layout-grid-icon5"
                    alt=""
                    src="/layoutgrid-1@2x.png"
                  />
                  <b className="dashboard11">Dashboard</b>
                </button>
                <div className="my-tasks8">
                  <img
                    className="tick-square-icon7"
                    alt=""
                    src="/tick-square-1@2x.png"
                  />
                  <div className="my-tasks9">My Tasks</div>
                </div>
                <div className="inbox5">
                  <img
                    className="message-circle-icon4"
                    alt=""
                    src="/messagecircle-1@2x.png"
                  />
                  <div className="message32">Message</div>
                </div>
                <div className="goals12">
                  <img className="trophy-icon4" alt="" src="/trophy-1@2x.png" />
                  <div className="goals13">Goals</div>
                </div>
              </div>
            </div>
            <div className="line19" />
            <div className="tittle-parent1">
              <div className="tittle50">
                <b className="space3">SPACE</b>
                <img
                  className="plus-icon3"
                  loading="eager"
                  alt=""
                  src="/plus1@2x.png"
                />
              </div>
              <div className="list12">
                <div className="project16">
                  <div className="name20">
                    <div className="name-child7" />
                    <div className="website-design4">Website Design</div>
                  </div>
                  <img className="dots-icon23" alt="" src="/dots1.svg" />
                </div>
                <div className="project17">
                  <div className="name21">
                    <div className="name-child8" />
                    <div className="seo-analythics4">SEO Analythics</div>
                  </div>
                  <img className="dots-icon24" alt="" src="/dots1.svg" />
                </div>
                <div className="project18">
                  <div className="name22">
                    <div className="name-child9" />
                    <div className="hiphonic-app4">Hiphonic App</div>
                  </div>
                  <img className="dots-icon25" alt="" src="/dots1.svg" />
                </div>
              </div>
            </div>
            <div className="task-summary-card">
              <div className="goals14">
                <img className="settings-icon4" alt="" src="/settings.svg" />
                <div className="settings4">Settings</div>
              </div>
              <div className="group1" />
              <div className="project19">
                <div className="name23">
                  <img
                    className="moon-stars-icon4"
                    alt=""
                    src="/moonstars.svg"
                  />
                  <div className="dark-mode4">Dark Mode</div>
                </div>
                <div className="switches4">
                  <div className="completionrate" />
                </div>
              </div>
            </div>
          </div>
          <div className="itemframecheckboxrectanglechec">
            <div className="text14" />
          </div>
          <div className="dashboard-wrapper">
            <h1 className="dashboard12">Dashboard</h1>
          </div>
          <div className="searchdefault-wrapper">
            <div className="searchdefault2">
              <img className="search-icon4" alt="" src="/search.svg" />
              <input className="search2" placeholder="Search..." type="text" />
            </div>
          </div>
          <div className="icon-container">
            <img
              className="icon11"
              loading="eager"
              alt=""
              src="/icon1@2x.png"
            />
          </div>
          <FormControl
            className="user7"
            variant="filled"
            sx={{
              borderRadius: "0px 0px 0px 0px",
              width: "185px",
              height: "84px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "84px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "84px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "84px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "84px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
            }}
            onClick={onUserClick}
          >
            <InputLabel color="primary" />
            <Select color="primary" disableUnderline displayEmpty />
            <FormHelperText />
          </FormControl>
        </div>
        <img
          className="user-fill-1-21"
          loading="eager"
          alt=""
          src="/userfill-1-2.svg"
        />
      </header>
    </section>
  );
};

export default CFrame;
