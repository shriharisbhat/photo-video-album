import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./templates/Home";
import DetailPage from "./templates/DetailPage";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/detail" component={DetailPage} />
      </Switch>
    </Router>
  );
}

export default App;
