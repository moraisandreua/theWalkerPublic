import React, { Component } from "react";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Choose from "./Choose";
import WalkerMainPage from "./WalkerMainPage";
import OwnerMainPage from "./OwnerMainPage";
import Ownerprofile from "./Ownerprofile";
import Walking from "./Walking";
import ChoosePayment from "./ChoosePayment";
import RateWalker from "./RateWalker";
import AddCard from "./AddCard";
import ExistingCards from "./ExistingCards";
import PaymentReview from "./PaymentReview";
import PaymentTransition from "./PaymentTransition";

import DogProfile from "./DogProfile";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

class Routes extends Component {
  constructor() {
    super();
    this.state = {
      isAuth: false,
    };

    this.checkAuth = this.checkAuth.bind(this);
  }

  checkAuth = (data) => {
    console.log(data.username);
    const user = data.username;
    const userData = JSON.parse(localStorage.getItem(user));
    console.log(userData);
    let { pass, petId } = { pass: "qqq", petId: 0 };

    if (userData) {
      pass = userData.pass;
      petId = userData.petId;
    }

    console.log(pass);
    if (userData == null || pass != data.pass) {
      this.setState({
        isAuth: false,
      });
    } else {
      this.setState({
        isAuth: true,
      });
    }
  };

  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={(props) =>
          this.state.isAuth == true ? (
            <Component {...props} user={this.user} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
      />
    );

    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route
            path="/login"
            render={(props) => <Login {...props} checkAuth={this.checkAuth} />}
          ></Route>
          <Route
            path="/register"
            render={(props) => (
              <Register {...props} checkAuth={this.checkAuth} />
            )}
          ></Route>
          <PrivateRoute path="/choose" component={Choose}></PrivateRoute>
          <PrivateRoute
            path="/walker/WalkerMainPage"
            component={WalkerMainPage}
          ></PrivateRoute>

          <PrivateRoute
            path="/owner/dogProfile"
            component={DogProfile}
          ></PrivateRoute>

          <PrivateRoute
            path="/owner/main"
            component={OwnerMainPage}
          ></PrivateRoute>
          <PrivateRoute
            path="/owner/ChoosePayment"
            component={ChoosePayment}
          ></PrivateRoute>
          <PrivateRoute
            path="/owner/RateWalker"
            component={RateWalker}
          ></PrivateRoute>
          <PrivateRoute
            path="/owner/AddCard"
            component={AddCard}
          ></PrivateRoute>
          <PrivateRoute
            path="/owner/PaymentReview"
            component={PaymentReview}
          ></PrivateRoute>
          <PrivateRoute
            path="/owner/PaymentTransition"
            component={PaymentTransition}
          ></PrivateRoute>
          <PrivateRoute
            path="/owner/ExistingCards"
            component={ExistingCards}
          ></PrivateRoute>
          <PrivateRoute
            path="/walker/OwnerProfile"
            component={Ownerprofile}
          ></PrivateRoute>
          <PrivateRoute
            path="/walker/Walking"
            component={Walking}
          ></PrivateRoute>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
