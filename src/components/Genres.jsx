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
            genres: json.genres,
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
    if (error) {
      return <div>Error:{error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Fragment>
          <h2>Genres</h2>
          <div className="list-group">
            {genres.map((g) => {
              return (
                <Link
                  to={{
                    pathname: `/genres/${g.id}`,
                    genreName: g.genre_name,
                  }}
                  className="list-group-item list-group-item-action"
                >
                  {g.genre_name}
                </Link>
              );
            })}
          </div>
        </Fragment>
      );
    }
  }
}
