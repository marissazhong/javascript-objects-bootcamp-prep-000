var playlist = {
  Perri: "human",
  Posner: "I Took A Pill In Ibiza",
  Clarkson: "Already Gone"
}

function updatePlaylist(playlist,artist,song) {
  playlist[artist] = song;
  return playlist
}

function removeFromPlaylist(playlist,artist) {
<<<<<<< HEAD
  delete playlist[artist];
=======
  delete playlist.artist;
>>>>>>> e4263d927e20784c8b0e8762b1c9fa9b3076c26e
  return playlist
}