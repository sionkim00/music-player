import { useRef, useState } from "react";
// components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
// util
import data from "./util";
// styles
import "./styles/app.scss";

export default function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [showLibrary, setShowLibrary] = useState(false);

  return (
    <div className="App">
      <Nav showLibrary={showLibrary} setShowLibrary={setShowLibrary} />
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        songs={songs}
        setSongs={setSongs}
      />
      <Library
        songs={songs}
        showLibrary={showLibrary}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
    </div>
  );
}
