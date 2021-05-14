import { Redirect } from "react-router";
import { useUser } from "../../utils/hooks";
import "./HomePage.css";

export function HomePage() {
  const {
    state: { username, listId },
  } = useUser();

  const usernameQuery = !!username ? `/?username=${username}` : "";

  return !!listId ? (
    <Redirect to={`/list/${listId}${usernameQuery}`} />
  ) : (
    <Redirect to="/login" />
  );
}
