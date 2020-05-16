import React from "react";
import "./collection-preview.scss";
import CollectionItem from "../collection-item/collection-item";
import { useHistory, useRouteMatch } from "react-router-dom";

const CollectionPreview = ({ title, items, routeName }) => {
  let match = useRouteMatch();
  let history = useHistory();
  return (
    <div className="collection-preview">
      <h1
        onClick={() => history.push(`${match.path}/${routeName}`)}
        className="title"
      >
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
