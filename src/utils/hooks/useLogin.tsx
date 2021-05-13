import { useContext } from "react";
import { UserContext } from "../../auth/UserProvider";

export function useLogin() {
  const { setUsername, setListId } = useContext(UserContext);

  function login(username: string, id: number) {
    setUsername(username);
    setListId(id);
  }

  return login;
}