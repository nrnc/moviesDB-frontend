import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Admin from "./components/Admin";
import Genres from "./components/Genres";
import Home from "./components/Home";
import Movies from "./components/Movies";
import { OneGenre } from "./components/OneGenre";
import { OneMovie } from "./components/OneMovie";
function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <h1 className="mt-3">Movies DB</h1>
          <hr className="mb-3" />
        </div>
        <div className="row">
          <div className="col-md-2">
            <nav>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/movies">Movies</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/genres">Genres</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/admin">Manage Catalogue</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-10">
            <Switch>
              <Route path="/movies/:id" component={OneMovie} />
              <Route path="/genres/:id" component={OneGenre} />
              <Route exact path="/genres">
                <Genres />
              </Route>
              <Route path="/admin">
                <Admin />
              </Route>
              <Route path="/movies">
                <Movies />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
