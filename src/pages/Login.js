import FrameComponent1 from "../components/FrameComponent1";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login-inner">
        <FrameComponent1 />
      </div>
      <img
        className="spm33-1-icon"
        loading="eager"
        alt=""
        src="/spm33-1@2x.png"
      />
    </div>
  );
};

export default Login;
