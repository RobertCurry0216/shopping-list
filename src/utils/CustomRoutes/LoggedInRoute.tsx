import { ComponentType } from "react";
import { Redirect, Route } from "react-router";
import { useUser } from "../hooks/useUser";

export type LoggedInRouteProps = {
  path: string;
  exact: boolean;
  component: ComponentType<any>;
};

export function LoggedInRoute(props: LoggedInRouteProps) {
  const {
    state: { status },
  } = useUser();
  return status === "logged in" ? (
    <Route {...props} />
  ) : (
    <Redirect to="/login" />
  );
}
