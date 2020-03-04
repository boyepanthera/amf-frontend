import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../App";

export const Protector = ({ component: Component, ...rest }) => {
  let authToken = localStorage.getItem("token");
  const { state } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authToken && state.isLoggedIn ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};
