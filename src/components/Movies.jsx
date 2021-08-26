import { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class Movies extends Component {
  state = {
    movies: [],
    isLoaded: false,
    error: null,
  };
  componentDidMount() {
    fetch("http://localhost:4000/v1/movies")
      .then((res) => {
        console.log(res.status);
        if (res.status !== 200) {
          let err = Error;
          err.message = "Invalid response code" + res.status;
          this.setState({ error: err });
        }
        return res.json();
      })
      .then(
        (json) => {
          this.setState({
            movies: json.movies,
            isLoaded: true,
          });
        },
        (err) => {
          this.setState({ isLoaded: true });
        }
      );
  }
  render() {
    const { movies, isLoaded, error } = this.state;
    if (error) {
      return <div>Error:{error.message}</div>;
    } else if (!isLoaded) {
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
