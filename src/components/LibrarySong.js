export default function LibrarySong({
  songs,
  song,
  id,
  setCurrentSong,
  setSongs
}) {
  const HandleSongSelect = () => {
    setCurrentSong(song);
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true
        };
      } else {
        return {
          ...song,
          active: false
        };
      }
    });
    setSongs(newSongs);
  };
  return (
    <div
      className={`library-song ${song.active ? "selected" : ""}`}
      onClick={HandleSongSelect}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}
