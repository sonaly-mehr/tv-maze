import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import Notfound from './Component/Notfound/Notfound';
import Show from './Component/Show/Show';

function App() {
  return (
    <div className="App_body">

      <Router>
      <Switch>
      <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route path="/shows/:showId">
          <Show></Show>
        </Route>
        <Route path="*">
         <Notfound></Notfound>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
