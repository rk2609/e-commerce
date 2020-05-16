import React from "react";
import "./cart-icon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useSelector, useDispatch } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectCartItemsCount);
  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
