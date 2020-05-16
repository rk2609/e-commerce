import React from "react";
import "./collection-item.scss";
import CustomButton from "../custom-button/custom-button";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart-actions";

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CustomButton
        className="custom-button"
        isInverted
        onClick={() => dispatch(addItem(item))}
      >
        Add to Cart
      </CustomButton>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">₹{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
