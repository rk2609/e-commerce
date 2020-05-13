import React from "react";
import "./cart-dropdown.scss";
import CustomButon from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart-selectors";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} {...cartItem} />
      ))}
    </div>
    <CustomButon isInverted>Go to CheckOut</CustomButon>
  </div>
);

const mapStatetToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStatetToProps)(CartDropdown);
