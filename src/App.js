import React, { Component } from "react";
import YTPlayer from "./components/YTPlayer";
import VideosList from "./components/videosList";
import { searchVideos } from "./services/googleService";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <YTPlayer />
        <VideosList />
      </div>
    );
  }
}

export default App;
