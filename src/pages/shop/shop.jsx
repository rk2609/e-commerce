import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview";
import CollectionPage from "../../pages/collection/collection";
import { useDispatch } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop-actions";
import { useRouteMatch } from "react-router-dom";

const ShopPage = () => {
  let match = useRouteMatch();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
