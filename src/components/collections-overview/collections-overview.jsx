import React from "react";
import "./collections-overview.scss";
import {
  selectCollectionForPreview,
  selectIsCollectionFetching,
} from "../../redux/shop/shop-selectors";
import { useSelector } from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview";
import Spinner from "../with-spinner/spinner";

const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionForPreview);
  const isLoading = useSelector(selectIsCollectionFetching);
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="collections-overview">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
