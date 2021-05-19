import './App.css';
import 'antd/dist/antd.css';
import SelectMovies from './SelectMovies';
import WelcomePage from './WelcomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/SelectMovies" component={SelectMovies} />
        <Route path="/" exact>
          <WelcomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
