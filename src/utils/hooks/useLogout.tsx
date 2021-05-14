import { useHistory } from "react-router-dom";
import { useUser } from "./";

export function useLogout() {
  const { dispatch } = useUser();
  const history = useHistory();

  function logout(username: string, listId: string) {
    dispatch({ type: "log out" });
    history.push("/");
  }

  return logout;
}
