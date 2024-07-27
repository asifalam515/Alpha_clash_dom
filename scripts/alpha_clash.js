//

function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;
  console.log("Player pressed ", playerPressed);
  // expected key to press
  const currentAlphabetElement = document.getElementById("current_alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log(expectedAlphabet);

  // checked match or not
  if (playerPressed === expectedAlphabet) {
    console.log("you got a point");
    // update the score
    let currentScore = scoreAndLife("current-score");

    const newScore = currentScore + 1;
    // set to ui
    showInUIById("current-score", newScore);

    // start a new round of game
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    // remaining life

    // const currentLifeElement = document.getElementById("current-life");
    let currentLife = scoreAndLife("current-life");

    const newLife = currentLife - 1;

    // set to ui
    showInUIById("current-life", newLife);
    if (newLife === 0) {
      gameOver();
    }
    // currentLifeElement.innerText = newLife;
  }
}
// capture keyboard keypress
document.addEventListener("keyup", handleKeyboardButtonPress);
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
  // hide everything show only playground
  hideElementById("home-screen");
  hideElementById("final-score");
  showElementById("play-ground");
  // rest score and life:
  showInUIById("current-life", 5);
  showInUIById("current-score", 0);
  continueGame();
}
function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");
}
