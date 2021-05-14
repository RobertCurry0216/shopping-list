import React, { createContext, useReducer } from "react";
import { IUser, UserReducer } from "./UserReducer";
import type { userDispatch } from "./UserReducer";

export const UserContext = createContext(
  {} as { state: IUser; dispatch: userDispatch }
);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(UserReducer, {
    status: "logged out",
  } as IUser);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
