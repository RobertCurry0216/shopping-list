import { useContext } from "react";
import { UserContext } from "../../auth/UserProvider";

export function useUser() {
  const { username, listId } = useContext(UserContext);
  return { username, listId } as const;
}
