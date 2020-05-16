import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import SignInPage from "./pages/signin/signin";
import ContactPage from "./pages/contact/contact";
import Header from "./components/header/header";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "./redux/user/user-selectors";
import { checkUserSession } from "./redux/user/user-actions";
import CheckOutPage from "./pages/checkout/checkout";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  const currentUser = useSelector(selectCurrentUser);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInPage />)}
        />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/checkout" component={CheckOutPage} />
      </Switch>
    </div>
  );
};

export default App;
