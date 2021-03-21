import { FunctionComponent } from "react";
import React, { Route, Switch } from "react-router-dom";
import { UserRoute } from "./utils/routing";
import { LoginView } from "./views/auth/loginView";
import { Dashboard } from "./views/Dashboard";

export const Routes: FunctionComponent = () => {
  return (
    <Switch>
      <UserRoute path="/" exact component={Dashboard} />
      <Route path="/auth/login" exact component={LoginView} />
    </Switch>
  );
};
