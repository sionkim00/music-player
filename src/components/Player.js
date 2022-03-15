import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause
} from "@fortawesome/free-solid-svg-icons";

export default function Player({
  currentSong,
  songs,
  setSongs,
  isPlaying,
  setIsPlaying,
  audioRef,
  setCurrentSong
}) {
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  });
  const handleActiveLibrary = (nextPrev) => {
    const newSongs = songs.map((song) => {
      if (song.id === nextPrev.id) {
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

  // event handlers
  const handlePlaySong = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };
  const handleTimeUpdate = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };
  const handleDrag = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  const handleSkip = (direction) => {
    let currentIndex = songs.findIndex((song) => currentSong.id === song.id);
    if (direction === "skip-forward") {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      handleActiveLibrary(songs[(currentIndex + 1) % songs.length]);
    } else if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        setCurrentSong(songs[songs.length - 1]);
        handleActiveLibrary(songs[songs.length - 1]);
      } else {
        setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        handleActiveLibrary(songs[(currentIndex - 1) % songs.length]);
      }
    }
  };

  const trimTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{trimTime(songInfo.currentTime)}</p>
        <input
          type="range"
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={(e) => handleDrag(e)}
        />
        <p>{trimTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          icon={faAngleLeft}
          size="2x"
          onClick={() => handleSkip("skip-back")}
        />
        <FontAwesomeIcon
          onClick={handlePlaySong}
          className="play"
          icon={isPlaying ? faPause : faPlay}
          size="2x"
        />
        <FontAwesomeIcon
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
          onClick={() => handleSkip("skip-forward")}
        />
      </div>
      <audio
        src={currentSong.audio}
        ref={audioRef}
        onTimeUpdate={(e) => handleTimeUpdate(e)}
        onLoadedMetadata={(e) => handleTimeUpdate(e)}
      />
    </div>
  );
}
