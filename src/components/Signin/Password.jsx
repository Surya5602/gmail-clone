import "./signin.css";
import Logo from "./Logo";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loginfooter from "./Loginfooter";
const Password = ({ userDetails, setUserDetails, step, setStep }) => {
  let navigate = useNavigate();
  const user = `${userDetails.email}@codingmart.test`;
  const checkInput = useRef();
  const handleChange = (e) => {
    if (e.target.checked) checkInput.current.type = "text";
    else checkInput.current.type = "password";
  };
  return (
    <div className="container">
      <div className="card flex">
        <div className="content">
          <div className="logo flex">
            <Logo />
          </div>
          <h4 className="title">Welcome</h4>
          <div className="userMail flex" onClick={() => setStep(step - 1)}>
            <i class="bx bxs-user-circle iconsMail " id="userIcon"></i>
            <h5 className="userMail_Mail">{user}</h5>
            <i class="bx bx-chevron-down iconsMail"></i>
          </div>
          <form className="form">
            <input
              type="password"
              className="input1"
              id="password"
              placeholder=" "
              ref={checkInput}
            />
            <label className="passwordLabel" htmlFor="password"></label>
            <div className="passwordInput flex">
              <input
                type="checkbox"
                id="showPassword"
                onChange={handleChange}
              />
              <label htmlFor="showPassword" id="showPassword_label">
                Show password
              </label>
            </div>
            <div className="btn-container flex">
              <Link to="signup" className="forgotten">
                Forgot password ?
              </Link>
              <button
                className="next-btn"
                onClick={(e) => {
                  navigate("/login");
                }}
              >
                Next
              </button>
            </div>
          </form>
        </div>
        <Loginfooter />
      </div>
    </div>
  );
};
export default Password;
