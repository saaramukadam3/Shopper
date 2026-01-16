import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "100px 16px",
        fontFamily: "sans-serif",
      }}
    >
      <h1>Thank you! Your order has been placed.</h1>
    </div>
  );
};

export default OrderSuccess;
