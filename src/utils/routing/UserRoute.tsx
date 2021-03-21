import React, { FunctionComponent, ReactNode, useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "../context";
import { FullRedirect } from "./FullRedirect";
import { RouteProps } from "./routeProps";

export const UserRoute: FunctionComponent<RouteProps> = ({
  component: Component,
  render,
  ...config
}) => {
  const { user } = useContext(AuthContext);
  return (
    <Route
      {...config}
      render={(props): ReactNode => {
        if (user?.confirmed) {
          return Component ? <Component {...props} /> : render();
        } else {
          return (
            <FullRedirect
              to={{
                pathname: "/login",
              }}
            />
          );
        }
      }}
    />
  );
};
