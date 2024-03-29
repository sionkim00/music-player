import LibrarySong from "./LibrarySong";
export default function Library({
  songs,
  showLibrary,
  setCurrentSong,
  setSongs
}) {
  return (
    <div className={`library ${showLibrary ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            song={song}
            setCurrentSong={setCurrentSong}
            key={song.id}
            id={song.id}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
}
