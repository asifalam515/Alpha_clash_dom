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
    console.log("perfect typing", expectedAlphabet);
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    console.log("you misspell it");
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
  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame();
}
