import Player from "./components/Player";
import Song from "./components/Song";

export default function App() {
  return (
    <div className="App">
      <h1>Music Player</h1>
      <Song />
      <Player />
    </div>
  );
}
