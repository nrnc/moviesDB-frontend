import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
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
                  <Link to="/admin">Manage Catalogue</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-10">
            <Switch>
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

function Admin() {
  return <h1>Manage Catalogue</h1>;
}
function Movies() {
  return <h1>Movies</h1>;
}
function Home() {
  return <h1>Home</h1>;
}
export default App;
