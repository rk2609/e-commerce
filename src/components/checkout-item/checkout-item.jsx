import React from "react";
import "./checkout-item.scss";

const CheckOutItem = ({ cartItem: { imageUrl, name, quantity, price } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="Item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">&#x2770;{quantity}&#x2771;</span>
    <span className="price">₹{price}</span>
    <div className="remove-button">&#x2716;</div>
  </div>
);

export default CheckOutItem;
