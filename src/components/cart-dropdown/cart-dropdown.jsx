import React from "react";
import "./cart-dropdown.scss";
import CustomButon from "../custom-button/custom-button";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButon isInverted>Go to CheckOut</CustomButon>
  </div>
);

export default CartDropdown;
