import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CssBaseline } from "@material-ui/core";

import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Protected from "./components/Protected";
import { setAuthenticated } from "./data/auth";
import PrivateRoute from "./components/hoc/PrivateRoute";

function App() {
  const dispatch = useDispatch();
  const user = localStorage.getItem("user");

  useEffect(() => {
    if (user) {
      dispatch(setAuthenticated());
    }
  }, []);

  return (
    <>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
          <PrivateRoute path="/secret">
            <Protected />
          </PrivateRoute>
        </Switch>
      </Router>
    </>
  );
}

export default App;
