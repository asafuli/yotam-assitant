import React, { Component } from "react";
import { searchVideos } from "../services/googleService";

class VideosList extends Component {
  state = {
    list: []
  };
  componentDidMount = async () => {
    let list = await searchVideos("PJ MASK");
    this.setState({ list });
    console.log("search results : ", list);
  };

  render() {
    const { list } = this.state;
    return list.length === 0
      ? null
      : list.map(vid => (
          <a
            href={`https://www.youtube.com/embed/${vid.id}?autoplay=1`}
            key={vid.id}
            className="links"
          >
            <img src={vid.thumb} />
          </a>
        ));
  }
}

export default VideosList;
