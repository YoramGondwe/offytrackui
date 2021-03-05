import { FunctionComponent } from "react";
import React, { Route, Switch } from "react-router-dom";
import { Dashboard } from "./views/Dashboard";

export const Routes: FunctionComponent = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
    </Switch>
  );
};
