import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleContinue = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill in all fields!");
      return;
    }

    if (!agree) {
      alert("Please agree to the terms before continuing.");
      return;
    }

    alert(`Sign Up Successful! Welcome, ${name}`);

    navigate("/");
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <form className="loginsignup-fields" onSubmit={handleContinue}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="loginsign-agree">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <p>
              By continuing, I agree to the <b>Terms of Use</b> & <b>Privacy Policy</b>.
            </p>
          </div>
          <button type="submit" className="signup-continue">
            Continue
          </button>
        </form>
        <p className="loginsignup-login">
          Already have an account? <span onClick={() => navigate("/login")}>Login here</span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
