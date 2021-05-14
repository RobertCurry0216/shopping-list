import React, { createContext, useReducer } from "react";
import { listReducer, IShoppingList } from "./ListReducer";
import type { listDispatch } from "./ListReducer";

export const ListContext = createContext(
  {} as { state: IShoppingList; dispatch: listDispatch }
);

export function ListProvider({
  username,
  listId,
  children,
}: {
  username: string;
  listId: string;
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(listReducer, {
    status: "ready",
    username,
    listId,
    items: [],
  } as IShoppingList);

  return (
    <ListContext.Provider value={{ state, dispatch }}>
      {children}
    </ListContext.Provider>
  );
}
