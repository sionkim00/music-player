// components
import Player from "./components/Player";
import Song from "./components/Song";
// styles
import "./styles/app.scss";

export default function App() {
  return (
    <div className="App">
      <h1>Music Player</h1>
      <Song />
      <Player />
    </div>
  );
}
