import { useCallback } from "react";
import "./Header.css";

const Header = () => {
  const onUserContainerClick = useCallback(() => {
    // Please sync "Personal info" to the project
  }, []);

  return (
    <header className="header1">
      <div className="frame2">
        <h1 className="message25">Message</h1>
        <div className="frame3">
          <div className="searchdefault">
            <img className="search-icon" alt="" src="/search.svg" />
            <input className="search" placeholder="Search..." type="text" />
          </div>
          <img className="icon5" loading="lazy" alt="" src="/icon-4.svg" />
        </div>
      </div>
      <div className="user3" onClick={onUserContainerClick}>
        <div className="avatar-parent">
          <img className="avatar-icon8" alt="" src="/avatar@2x.png" />
          <div className="name-parent">
            <b className="name4">Angela L.</b>
            <div className="name5">Project Manager</div>
          </div>
        </div>
        <img className="chevron-down-icon2" alt="" src="/chevrondown-1.svg" />
      </div>
    </header>
  );
};

export default Header;
