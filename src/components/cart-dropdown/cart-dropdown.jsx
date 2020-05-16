import React from "react";
import "./cart-dropdown.scss";
import CustomButon from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart-selectors";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import { useHistory } from "react-router-dom";

const CartDropdown = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} {...cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is Empty</span>
        )}
      </div>
      <CustomButon
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        Go to CheckOut
      </CustomButon>
    </div>
  );
};

export default CartDropdown;
