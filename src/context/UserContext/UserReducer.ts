import React from "react";

export interface IUser {
  username: string | null;
  listId: string | null;
  status: "logged in" | "logged out" | "pending";
}

type actionType =
  | {
      type: "log in";
      payload: { username: string; listId: string };
    }
  | {
      type: "log out";
    };

export type userDispatch = React.Dispatch<actionType>;

export function UserReducer(user: IUser, action: actionType) {
  switch (action.type) {
    case "log in":
      const { username, listId } = action.payload;
      return { ...user, username, listId, status: "logged in" } as IUser;
    case "log out":
      return { status: "logged out" } as IUser;
    default:
      throw new Error(`Unknown action: ${action}`);
  }
}
