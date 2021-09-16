import OTPInput from "react-otp-input";
import React, { useState } from "react";
import "./styledVerify.css";

function Verify() {
  const [OTP, setOTP] = useState("");
  function handleChange(OTP) {
    setOTP(OTP);
  }
  return (
    <div className="verifyDiv">
      <div className="heding">
        <p className="p1">Verify Account</p>
        <p className="p2">
          An OTP has been sent to your entered email abcd@gmail.com
        </p>
      </div>
      <div className="otpElements">
        <p className="p3">Enter your Code here</p>
        <div className="otp">
          <OTPInput
            onChange={handleChange}
            value={OTP}
            inputStyle="inputStyle"
            numInputs={6}
            separator={<span></span>}
          />
        </div>

        <p className="p3">Didn't receive the code?</p>
        <p className="resend">Resend</p>
      </div>
      <button type="submit">Verify</button>
    </div>
  );
}

export default Verify;
