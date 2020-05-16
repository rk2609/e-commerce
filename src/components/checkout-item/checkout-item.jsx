import React from "react";
import "./checkout-item.scss";
import { useDispatch } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart-actions";

const CheckOutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="Item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeItem(cartItem))}>
          &#x2770;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>
          &#x2771;
        </div>
      </span>
      <span className="price">₹{price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(clearItemFromCart(cartItem))}
      >
        &#x2716;
      </div>
    </div>
  );
};

export default CheckOutItem;
