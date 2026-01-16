import React, { useState } from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      alert("Please enter your email!");
      return;
    }
    alert(`Thank you for subscribing: ${email}`);
    setEmail(""); 
  };

  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter & Stay Updated</p>

      <div className="subscribe-section">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="subscribe-btn" onClick={handleSubscribe}>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
