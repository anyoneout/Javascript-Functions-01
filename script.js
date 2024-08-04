function playSong() {
  let liveSong = new Audio("AtomAndEvil.mp3");
    liveSong.volume = .20;
    liveSong.play()
}

console.log("Hello World");

songButton.onclick = playSong;

function aAndE(){
  return "Atom and Evil";
}

function ifYouDont(){
  return "If you don't break up that romance soon"
}

function allFallDown(){
  return "We'll all fall down and go boom, boom, boom!"
}

function refrain() {
  let refrainLyrics = "";
  refrainLyrics += `I'm talkin' 'bout ${aAndE()}<br>`;
  refrainLyrics += `${aAndE()}<br>`;
  refrainLyrics += `${ifYouDont()}<br>`;
  refrainLyrics += `${allFallDown()}<br>`;
  refrainLyrics += `<br>`;
  return refrainLyrics;
}
function verseOne() {
  let verseOneLyrics = "";
  verseOneLyrics += "Now brothers and sisters<br>"
  verseOneLyrics += "I'm troubled to say<br>"
  verseOneLyrics += "Brother Atom is gone astray<br>"
  verseOneLyrics += "Listen, listen, listen, listen, listen<br>"
  verseOneLyrics += `<br>`;
  return verseOneLyrics;
}
function verseTwo() {
  let verseTwoLyrics = "";
  verseTwoLyrics += `This is the story of ${aAndE()}<br>`
  verseTwoLyrics += "Their courtship is causin' a great upheaval<br>"
  verseTwoLyrics += "Now Atom was a sweet young innocent thing<br>"
  verseTwoLyrics += "Until the night that Miss Evil took him under her wing<br>"
  verseTwoLyrics += `<br>`;
  return verseTwoLyrics;
}
function verseThree() {
  let verseThreeLyrics = "";
  verseThreeLyrics += "Now Atom was an honest, hard workin' man<br>"
  verseThreeLyrics += "He wanted to help out the human clan<br>"
  verseThreeLyrics += "But Evil got him drunk on prejudice and hate<br>"
  verseThreeLyrics += "And she taught him how to gamble with Humanity's fate<br>"
  verseThreeLyrics += "(So true!)<br>"
  verseThreeLyrics += `<br>`;
  return verseThreeLyrics;
}
function verseFour() {
  let verseFourLyrics = "";
  verseFourLyrics += "Now if Evil gets Atom, 'twill be such a shame<br>"
  verseFourLyrics += "Because a-plenty of big shots are playin' that dame<br>"
  verseFourLyrics += "Now his sleep will be troubled, and his life will be cursed<br>"
  verseFourLyrics += "Lord, if Atom plays with evil, Jack, he won't be the first!<br>"
  verseFourLyrics += "(So true!)<br>"
  verseFourLyrics += `<br>`;
  return verseFourLyrics;
}
function verseFive() {
  let verseFiveLyrics = "";
  verseFiveLyrics += "Now Atom is a youngster and pretty hard to handle<br>"
  verseFiveLyrics += "But we better step in and stop that scandal<br>"
  verseFiveLyrics += `Because if ${aAndE()} should ever be wed<br>`
  verseFiveLyrics += "Lord, then darn near all of us are goin' to be dead!<br>"
  verseFiveLyrics += "(So True)<br>"
  verseFiveLyrics += `<br>`;
  return verseFiveLyrics;
}
function verseSix() {
  let verseSixLyrics = "";
  verseSixLyrics += `${aAndE()}<br>`
  verseSixLyrics += `${aAndE()}<br>`
  verseSixLyrics += `${ifYouDont()}<br>`
  verseSixLyrics += `${allFallDown()}<br>`
  verseSixLyrics += "We're sitting on the edge of doom (doom) (doom) (doom) doom!<br>"
  verseSixLyrics += `<br>`;
  return verseSixLyrics;
}


function song() {
  lyrics.innerHTML += verseOne();
  lyrics.innerHTML += verseTwo();
  lyrics.innerHTML += verseThree();
  lyrics.innerHTML += refrain();
  lyrics.innerHTML += verseFour();
  lyrics.innerHTML += refrain();
  lyrics.innerHTML += verseFive();
  lyrics.innerHTML += refrain();
  lyrics.innerHTML += verseSix();
}

song();

