import "./styles/reset.css";
import "./styles/main.css";

// libs
import { Route, Switch, NavLink, Redirect } from "react-router-dom";

//pages
import { HomePage, AboutPage, LoginPage } from "./pages";

//componants
import { Navbar } from "./componants/Navbar";
import { LoggedInRoute } from "./utils/CustomRoutes";

function App() {
  return (
    <div>
      <Navbar title="Shopping List">
        <NavLink to="/" activeClassName="active-link">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active-link">
          About
        </NavLink>
      </Navbar>
      <div className="container">
        <Switch>
          <LoggedInRoute path="/" exact component={HomePage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/login" exact component={LoginPage} />
          <Redirect to="/login" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
