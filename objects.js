var playlist = {
  Metallica: 'Ride the Lighting',
  "Carl Orff": 'O Fortuna'
  
}

function updatePlaylistn (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  
  return playlist
}