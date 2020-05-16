import React from "react";
import "./cart-item.scss";

const CartItem = ({ name, imageUrl, price, quantity }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="Item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} X ₹{price}
      </span>
    </div>
  </div>
);

export default CartItem;
