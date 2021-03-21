import { FunctionComponent } from "react";
import React, { Route, Switch } from "react-router-dom";
import { UserRoute } from "./utils/routing";
import { LoginView } from "./views/auth/loginView";
import { Dashboard } from "./views/Dashboard";

export const Routes: FunctionComponent = () => {
  return (
    <Switch>
      <Route path="/login" exact component={LoginView} />
      <UserRoute path="/" exact component={Dashboard} />
    </Switch>
  );
};
