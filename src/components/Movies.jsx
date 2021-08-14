import { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class Movies extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    this.setState({
      movies: [
        { id: 1, title: "The Shawshank Redemtion", runtime: 144 },
        { id: 2, title: "The God Father", runtime: 167 },
        { id: 3, title: "The Dark Knight", runtime: 123 },
      ],
    });
  }
  render() {
    return (
      <Fragment>
        <h2>Choose a Movie</h2>
        <ul>
          {this.state.movies.map((movie) => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}
