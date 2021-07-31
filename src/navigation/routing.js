import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Strings } from 'resources';

/* Landing Screens */
import Clients from "screens/Clients";
import PageNotFound from "screens/PageNotFound";

/* Layout Files */
import AuthLayoutWithoutAuth from "layouts/AuthLayout/WithoutAuth";

/* Store Files */
import store from "redux/store";
import { Provider as ReduxProvider } from "react-redux";

export default function Routing() {
  return (
      <ReduxProvider store={store}>
        <Router>
          <Switch>
            <AuthLayoutWithoutAuth
              exact
              path="/"
              component={Clients}
              pageTitle={Strings.clientsTitle}
            />
            <Route path="*" exact={true} component={PageNotFound} />
          </Switch>
        </Router>
      </ReduxProvider>
  );
}
