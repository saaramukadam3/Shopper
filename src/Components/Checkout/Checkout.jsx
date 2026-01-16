import React, { useState, useContext } from "react";
import "./Checkout.css";
import { ShopContext } from "../../Context/ShopContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { getTotalCartAmount } = useContext(ShopContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handlePlaceOrder = () => {
    if (!name || !email || !address) {
      alert("Please fill in all required fields!");
      return;
    }

    if (getTotalCartAmount() === 0) {
      alert("Your cart is empty!");
      return;
    }

    navigate("/order-success");
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>

      <div className="checkout-container">
        <div className="checkout-left">
          <h2>Billing Details</h2>

          <input
            type="text"
            placeholder="Full Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Street Address *"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="Postal Code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />

          <button
            type="button"
            className="checkout-placeorder"
            onClick={handlePlaceOrder}
          >
            PLACE ORDER
          </button>
        </div>

        <div className="checkout-right">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>

          <div className="summary-row">
            <p>Shipping</p>
            <p>Free</p>
          </div>

          <hr />

          <div className="summary-total">
            <h3>Total</h3>
            <h3>${getTotalCartAmount()}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
