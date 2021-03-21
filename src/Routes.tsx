import { FunctionComponent } from "react";
import React, { Route, Switch } from "react-router-dom";
import { UserRoute } from "./utils/routing";
import { LoginView } from "./views/auth/loginView";
import { Dashboard } from "./views/Dashboard";
import { LeaveTypeView } from "./views/LeaveTypes";
import { RequestLeaveView } from "./views/RequestLeave";
import { SettingsView } from "./views/Settings";

export const Routes: FunctionComponent = () => {
  return (
    <Switch>
      <UserRoute path="/" exact component={Dashboard} />
      <Route path="/login" exact component={LoginView} />
      <UserRoute path="/leaveTypes" exact component={LeaveTypeView} />
      <UserRoute path="/request" exact component={RequestLeaveView} />
      <UserRoute path="/settings" exact component={SettingsView} />
    </Switch>
  );
};
