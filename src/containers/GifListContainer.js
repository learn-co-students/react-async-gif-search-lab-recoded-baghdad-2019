import React from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export default class GifListContainer extends React.Component {
  state = {
    gify: []
  };

  handleSubmit = type => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q="${type}"&api_key=GKgi3aICSWb2JWpIaCwk2cTcVejmm0pP&rating=g`
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          gify: json.data.slice(0, 3)
        });
      });
  };
  render() {
    return (
      <div>
        <GifSearch handleSubmit={this.handleSubmit} />
        <GifList gify={this.state.gify} />
      </div>
    );
  }
}
