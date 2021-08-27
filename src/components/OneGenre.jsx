import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
export class OneGenre extends Component {
  state = {
    movies: [],
    isLoaded: false,
    error: null,
  };
  componentDidMount() {
    fetch(`http://localhost:4000/v1/genres/${this.props.match.params.id}`)
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
    let { movies, isLoaded, error } = this.state;
    if (!movies) {
      movies = [];
    }
    if (error) {
      return <div>Error:{error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Fragment>
          <h2>Genre :</h2>
          <div className="list-group">
            {movies.map((movie) => {
              return (
                <Link
                  to={`/movies/${movie.id}`}
                  className="list-group-item list-group-item-action"
                >
                  {movie.title}
                </Link>
              );
            })}
          </div>
        </Fragment>
      );
    }
  }
}
