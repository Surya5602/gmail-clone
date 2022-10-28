import { useState } from "react";
import Mail from "./Mail";
import Password from "./Password";
const Signin = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const [step, setStep] = useState(0);
  switch (step) {
    case 0:
      return (
        <Mail
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          step={step}
          setStep={setStep}
        />
      );
    case 1:
      console.log(userDetails.email);
      return (
        <Password
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          step={step}
          setStep={setStep}
        />
      );
  }
};
export default Signin;
