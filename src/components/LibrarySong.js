import React from "react";

const LibrarySong = ({
  song,
  setCurrentSong,
  isPlaying,
  audioRef,
  currentSong,
}) => {
  const songSelectHandler = () => {
    setCurrentSong(song);

    if (isPlaying) {
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        // when the playPromise is undefined, it will be waiting
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  };

  return (
    <div>
      <div
        className={`library-song ${
          song.id === currentSong.id ? "selected" : ""
        }`}
        onClick={songSelectHandler}
      >
        <img alt={song.name} src={song.cover} />
        <div className="song-description">
          <h3>{song.name}</h3>
          <h4>{song.artist}</h4>
        </div>
      </div>
    </div>
  );
};

export default LibrarySong;
