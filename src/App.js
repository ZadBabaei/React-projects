import "./App.css";
import "antd/dist/antd.css";
import SelectMovies from "./SelectMovies";
import WelcomePage from "./WelcomePage";
import {BrowserRouter as Router, Switch,Route, Link} from "react-router-dom";



function App() {
  
  return (
    <Router>
      <Switch>
      <Route path="/SelectMovies"  component ={SelectMovies} />
      <Route path="/"  exact component ={WelcomePage} />
      </Switch>
    </Router>
  );
}

export default App;
