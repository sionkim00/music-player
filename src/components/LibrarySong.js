export default function LibrarySong({ song, setCurrentSong }) {
  const HandleSongSelect = () => {
    setCurrentSong(song);
  };
  return (
    <div className="library-song" onClick={HandleSongSelect}>
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}
