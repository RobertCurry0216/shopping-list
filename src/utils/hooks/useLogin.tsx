import { useHistory } from "react-router-dom";
import { useUser } from "./";

export function useLogin() {
  const { dispatch } = useUser();
  const history = useHistory();

  function login(username: string, listId: string) {
    dispatch({ type: "log in", payload: { username, listId } });
    history.push("/");
  }

  return login;
}
