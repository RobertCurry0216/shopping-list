import React, { createContext, useState } from "react";

interface IUserContext {
  username: string | null;
  setUsername: (name: string) => void;
  listId: string | null;
  setListId: (id: string) => void;
}

export const UserContext = createContext({} as IUserContext);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [username, setUsername] = useState<string | null>(null);
  const [listId, setListId] = useState<string | null>(null);
  return (
    <UserContext.Provider value={{ username, setUsername, listId, setListId }}>
      {children}
    </UserContext.Provider>
  );
}
