import "./LoginPage.css";

//componants
import { LoginForm } from "../../componants/LoginForm";
import { useLogin } from "../../utils/hooks/useLogin";
import { nanoid } from "nanoid";
import { useHistory } from "react-router";

export function LoginPage() {
  const login = useLogin();

  function loginHandler(username: string, id: string | null) {
    const listid = id || nanoid(5);
    login(username, listid);
  }

  return (
    <div className="login-page">
      <LoginForm onClick={loginHandler} />
    </div>
  );
}
