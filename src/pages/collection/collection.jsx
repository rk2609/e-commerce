import React from "react";
import "./collection.scss";
import CollectionItem from "../../components/collection-item/collection-item";
import { useSelector } from "react-redux";
import {
  selectCollection,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop-selectors";
import { useParams } from "react-router-dom";
import Spinner from "../../components/with-spinner/spinner";

const CollectionPage = () => {
  const isLoading = useSelector(selectIsCollectionsLoaded);
  const params = useParams();
  const collection = useSelector((state) =>
    selectCollection(params.collectionId)(state)
  );

  return isLoading ? (
    <div className="collection-page">
      <h2 className="title">{collection.title}</h2>
      <div className="items">
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  ) : (
    <Spinner />
  );
};

export default CollectionPage;
