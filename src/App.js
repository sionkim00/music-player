import { useState } from "react";
// components
import Player from "./components/Player";
import Song from "./components/Song";
// util
import data from "./util";
// styles
import "./styles/app.scss";

export default function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <h1>Music Player</h1>
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}
