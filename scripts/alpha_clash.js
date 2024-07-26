function continueGame() {
  // step 1:generate a random alphabet:
  const alphabet = getARandomAlphabet();
  // set randomly generated alphabet in UI
  const currentAlphabetElement = document.getElementById("current_alphabet");
  currentAlphabetElement.innerText = alphabet;
  // set Background color
  setBackgroundColorById(alphabet);
}

function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame();
}
