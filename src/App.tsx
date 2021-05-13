import "./styles/reset.css";
import "./styles/main.css";

// libs
import { Route, Switch, NavLink } from "react-router-dom";

//pages
import { HomePage, AboutPage } from "./pages";

//componants
import { Navbar } from "./componants/Navbar";

function App() {
  return (
    <div>
      <Navbar title="Shopping List">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </Navbar>
      <div className="container">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={AboutPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
