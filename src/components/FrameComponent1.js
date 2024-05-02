import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TypeemailStatefilledSize from "./TypeemailStatefilledSize";
import TypepasswordStatedefault from "./TypepasswordStatedefault";
import ButtonLargePrimary from "./ButtonLargePrimary";
import Buttonsocialgoogle from "./Buttonsocialgoogle";
import "./FrameComponent1.css";

const FrameComponent1 = () => {
  const navigate = useNavigate();

  const onButtonLargePrimaryClick = useCallback(() => {
    navigate("/main-dashboard");
  }, [navigate]);

  const onDontHaveAnClick = useCallback(() => {
    // Please sync "Signup start" to the project
  }, []);

  return (
    <form className="title-frame-parent">
      <div className="title-frame">
        <h2 className="tittle54">Sign In to your Account</h2>
        <div className="body">Welcome back! please enter your detail</div>
      </div>
      <div className="input-frame">
        <div className="input">
          <TypeemailStatefilledSize
            mail="/mail2.svg"
            angelalaufeaumailcom="Email"
            showMailIcon
            typeemailStatefilledSizeAlignSelf="stretch"
            typeemailStatefilledSizePosition="unset"
            typeemailStatefilledSizeTop="unset"
            typeemailStatefilledSizeLeft="unset"
            typeemailStatefilledSizeWidth="unset"
            angelalaufeaumailcomOpacity="unset"
            angelalaufeaumailcomLetterSpacing="unset"
            angelalaufeaumailcomLineHeight="160%"
            angelalaufeaumailcomFontWeight="unset"
            angelalaufeaumailcomColor="#94a3b8"
          />
          <TypepasswordStatedefault
            passwordInput="Password"
            typepasswordStatedefaultWidth="unset"
            typepasswordStatedefaultPosition="unset"
            typepasswordStatedefaultTop="unset"
            typepasswordStatedefaultLeft="unset"
            typepasswordStatedefaultAlignSelf="stretch"
          />
        </div>
        <div className="forgot-link">
          <div className="button-primary">
            <input className="checkbox4" type="checkbox" />
            <div className="remember-me">Remember me</div>
          </div>
          <b className="forgot-password">Forgot Password?</b>
        </div>
      </div>
      <ButtonLargePrimary
        buttonText="Sign In"
        buttonLargePrimaryBackgroundColor="#000"
        buttonLargePrimaryWidth="unset"
        buttonLargePrimaryPosition="unset"
        buttonLargePrimaryTop="unset"
        buttonLargePrimaryLeft="unset"
        buttonLargePrimaryCursor="pointer"
        onButtonLargePrimaryContainerClick={onButtonLargePrimaryClick}
      />
      <div className="or-frame">
        <div className="divider-line" />
        <div className="or-sign-in">Or sign in with</div>
        <div className="divider-line1" />
      </div>
      <Buttonsocialgoogle />
      <div className="rectangle-background">
        <div className="dont-have-an-container" onClick={onDontHaveAnClick}>
          <span className="dont-have-an-account">
            <span className="dont-have-an">Don’t have an account?</span>
            <span className="span10">{` `}</span>
          </span>
          <b className="sign-up">Sign Up</b>
        </div>
      </div>
    </form>
  );
};

export default FrameComponent1;
