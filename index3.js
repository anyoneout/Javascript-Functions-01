console.log("Hello World");

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
  refrainLyrics += `I'm talkin' 'bout ${aAndE()}\n`
  refrainLyrics += `${aAndE()}\n`
  refrainLyrics += `${ifYouDont()}\n`
  refrainLyrics += `${allFallDown()}\n`
  return refrainLyrics;
}
function verseOne() {
  let verseOneLyrics = "";
  verseOneLyrics += "Now brothers and sisters\n"
  verseOneLyrics += "I'm troubled to say\n"
  verseOneLyrics += "Brother Atom is gone astray\n"
  verseOneLyrics += "Listen, listen, listen, listen, listen\n"
  return verseOneLyrics;
}
function verseTwo() {
  let verseTwoLyrics = "";
  verseTwoLyrics += `This is the story of ${aAndE()}\n`
  verseTwoLyrics += "Their courtship is causin' a great upheaval\n"
  verseTwoLyrics += "Now Atom was a sweet young innocent thing\n"
  verseTwoLyrics += "Until the night that Miss Evil took him under her wing\n"
  return verseTwoLyrics;
}
function verseThree() {
  let verseThreeLyrics = "";
  verseThreeLyrics += "Now Atom was an honest, hard workin' man\n"
  verseThreeLyrics += "He wanted to help out the human clan\n"
  verseThreeLyrics += "But Evil got him drunk on prejudice and hate\n"
  verseThreeLyrics += "And she taught him how to gamble with Humanity's fate\n"
  verseThreeLyrics += "(So true!)\n"
  return verseThreeLyrics;
}
function verseFour() {
  let verseFourLyrics = "";
  verseFourLyrics += "Now if Evil gets Atom, 'twill be such a shame\n"
  verseFourLyrics += "Because a-plenty of big shots are playin' that dame\n"
  verseFourLyrics += "Now his sleep will be troubled, and his life will be cursed\n"
  verseFourLyrics += "Lord, if Atom plays with evil, Jack, he won't be the first!\n"
  verseFourLyrics += "(So true!)\n"
  return verseFourLyrics;
}
function verseFive() {
  let verseFiveLyrics = "";
  verseFiveLyrics += "Now Atom is a youngster and pretty hard to handle\n"
  verseFiveLyrics += "But we better step in and stop that scandal\n"
  verseFiveLyrics += `Because if ${aAndE()} should ever be wed\n`
  verseFiveLyrics += "Lord, then darn near all of us are goin' to be dead!\n"
  verseFiveLyrics += "(So True)\n"
  return verseFiveLyrics;
}
function verseSix() {
  let verseSixLyrics = "";
  verseSixLyrics += `${aAndE()}\n`
  verseSixLyrics += `${aAndE()}\n`
  verseSixLyrics += `${ifYouDont()}\n`
  verseSixLyrics += `${allFallDown()}\n`
  verseSixLyrics += "We're sitting on the edge of doom (doom) (doom) (doom) doom!\n"
  return verseSixLyrics;
}


function song() {
  console.log(verseOne());
  console.log(verseTwo());
  console.log(verseThree());
  console.log(refrain());
  console.log(verseFour());
  console.log(refrain());
  console.log(verseFive());
  console.log(refrain());
  console.log(verseSix());
}

console.log(song());
