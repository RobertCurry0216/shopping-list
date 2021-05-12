import "./styles/reset.css";
import "./styles/main.css";

import { ShoppingListItem } from "./componants/ShoppingListItem";

function App() {
  return (
    <div className="App">
      <ShoppingListItem title="Bread" quantity={1} unit="x" />
    </div>
  );
}

export default App;
