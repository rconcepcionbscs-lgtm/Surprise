function showCard() {
  const card = document.getElementById('hbdcard');
  const song = document.getElementById('mySong');
  
  //show the card
card.style.opacity = "1";
card.style.pointerEvents = "auto";
  
  //play the music
  song.play();
  document.getElementById("hbdcard").style.opacity = "1";
  document.getElementById("hbdcard").style.pointerEvents = "auto;"
}

function closeCard() {
  const card = document.getElementById('hbdcard');
  const song = document.getElementById('mySong');
  
  // hide the card
  card.style.opacity = "0";
  card.style.pointerEvents = "none";
  
  //stop the music and reset to the beginning
  song.pause();
  song.currentTime = 0;
}
