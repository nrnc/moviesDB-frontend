import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class Genres extends Component {
  state = {
    genres: [],
    isLoaded: false,
    error: null,
  };
  componentDidMount() {
    fetch("http://localhost:4000/v1/genres")
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
            movies: json.genres,
            isLoaded: true,
          });
        },
        (err) => {
          this.setState({ isLoaded: true });
        }
      );
  }
  render() {
    const { genres, isLoaded, error } = this.state;
    return (
      <Fragment>
        <h2>Genres</h2>
        <ul>
          {genres.map((g) => {
            <Link to={`/genre/${g.id}`}>{g.genre_name}</Link>;
          })}
        </ul>
      </Fragment>
    );
  }
}
