import React, { useEffect, lazy, Suspense } from "react";
import "./App.css";

import { Switch, Route, Redirect } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "./redux/user/user-selectors";
import { checkUserSession } from "./redux/user/user-actions";

import Spinner from "./components/with-spinner/spinner";

const HomePage = lazy(() => import("./pages/homepage/homepage"));
const ShopPage = lazy(() => import("./pages/shop/shop"));
const SignInPage = lazy(() => import("./pages/signin/signin"));
const ContactPage = lazy(() => import("./pages/contact/contact"));
const Header = lazy(() => import("./components/header/header"));
const CheckOutPage = lazy(() => import("./pages/checkout/checkout"));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  const currentUserObject = useSelector(selectCurrentUser);

  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Header />
      </Suspense>
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUserObject ? <Redirect to="/" /> : <SignInPage />
            }
          />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/checkout" component={CheckOutPage} />
        </Suspense>
      </Switch>
    </div>
  );
};

export default App;
