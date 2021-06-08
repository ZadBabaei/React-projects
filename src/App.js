import './App.css';
import 'antd/dist/antd.css';
import SelectMovies from './SelectMovies';
import WelcomePage from './WelcomePage';
import VotingLink from './VotingLink';
import VotingTicket from './VotingTicket';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/SelectMovies" component={SelectMovies} />
        <Route path="/VotingLink" exact component={VotingLink} />
        <Route path="/Votingticket" exact component={VotingTicket} />
        <Route path="/" exact>
          <WelcomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
