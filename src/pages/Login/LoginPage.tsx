import "./LoginPage.css";

//componants
import { LoginForm, LoginFormProps } from "../../componants/LoginForm";

export function LoginPage() {
  return (
    <div className="login-page">
      <LoginForm onClick={(username, id) => console.log(username + id)} />
    </div>
  );
}
