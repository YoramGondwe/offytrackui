import { FunctionComponent } from "react";
import React, { Route, Switch } from "react-router-dom";
// import { UserRoute } from "./utils/routing";
import { LoginView } from "./views/auth/loginView";
import { Dashboard } from "./views/Dashboard";
import { testPage } from "./views/testpage";

export const Routes: FunctionComponent = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      {/* <UserRoute path="/" exact component={Dashboard} /> */}
      <Route path="/auth/login" exact component={LoginView} />
      <Route path="/auth" exact component={testPage} />
    </Switch>
  );
};
