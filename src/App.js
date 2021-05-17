import "./App.css";
import "antd/dist/antd.css";
import SelectMovies from "./SelectMovies";
import WelcomePage from "./WelcomePage";
import {BrowserRouter as Router, Switch,Route, Link} from "react-router-dom";



function App() {
  
  return (
    <Router>
      <WelcomePage/>
      <Switch>
      <Route path="/SelectMovies"  component ={SelectMovies} />
      </Switch>
    </Router>
  );
}

export default App;
