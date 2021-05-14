import React, { createContext, useReducer } from "react";
import { IUser, UserReducer } from "./UserReducer";
import type { actionType } from "./UserReducer";

export const UserContext = createContext(
  {} as { state: IUser; dispatch: React.Dispatch<actionType> }
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
