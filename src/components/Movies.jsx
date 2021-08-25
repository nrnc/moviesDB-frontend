import { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class Movies extends Component {
  state = {
    movies: [],
    isLoaded: false,
  };
  componentDidMount() {
    fetch("http://localhost:4000/v1/movies")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => {
        this.setState({
          movies: json.movies,
          isLoaded: true,
        });
      });
  }
  render() {
    const { movies, isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Fragment>
          <h2>Choose a Movie</h2>
          <ul>
            {movies.map((movie) => {
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
}
