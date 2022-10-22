/* Developer Notes: 
- fix game-engine code
 */

const screenEl = document.getElementById("screen");
const startBtn = document.getElementById("start-btn");
const instructionsBtn = document.getElementById("instructions-btn");
const creditsBtn = document.getElementById("credits");
const highscoreEl = document.getElementById("high-score");
const logoContainer = document.getElementById("logo-container");
const creditsScreen = document.getElementById("credits-screen");
const returnToHomeFromCredits = document.getElementById("return-btn-credits");
const returnToHomeFromInstructions = document.getElementById(
  "return-btn-instructions"
);
const instructionsScreen = document.getElementById("instructions-screen");
const gameplayBtns = document.getElementById("gameplay-buttons-container");
const gameplayTxt = document.getElementById("gameplay-text");
const gameplayCountdown = document.getElementById("gameplay-countdown");
const gameplayHeading = document.getElementById("gameplay-text-heading");
const incorrect = document.getElementById("incorrect-img");
const correct = document.getElementById("correct-img");
const scoreEl = document.getElementById("gameplay-score"); // check
let firstPlay = true;
let score = 0; // 0 -> default | >0 -> game in progress
let isAlive = -1; // -1 -> first start | 0 -> game over | 1 -> start/game-in-progress
let tries = 0;

// Show landing page when first run
logoContainer.style.visibility = "visible";
instructionsBtn.style.visibility = "visible";
creditsBtn.style.visibility = "visible";
highscoreEl.style.visibility = "visible";
startBtn.style.visibility = "visible";
creditsScreen.style.visibility = "hidden";
instructionsScreen.style.visibility = "hidden";
gameplayBtns.style.visibility = "hidden";
gameplayTxt.style.visibility = "hidden";
gameplayCountdown.style.visibility = "hidden";

// Start Button Clicked:
startBtn.addEventListener("click", startGame);

// Tutorial Button Clicked:
instructionsBtn.addEventListener("click", runTutorial);

// Credits Button Clicked:
creditsBtn.addEventListener("click", rollCredits);

// Return to Home from Credits Clicked:
returnToHomeFromCredits.addEventListener("click", returnHome);

// Return to Home from Instructions Clicked:
returnToHomeFromInstructions.addEventListener("click", returnHome);

// Start game function:
function startGame() {
  isAlive = true;
  score = 0;
  HideEl();
  gameplayBtns.style.visibility = "visible";
  gameplayTxt.style.visibility = "visible";
  gameplayCountdown.style.visibility = "visible";
  gameEngine();
}

// Run tutorial function:
function runTutorial() {
  HideEl();
  instructionsScreen.style.visibility = "visible";
}

// Roll Credits Function
function rollCredits() {
  HideEl();
  creditsScreen.style.visibility = "visible";
}

// Return home Function --- hide all other screens except landing page
function returnHome() {
  ShowEl();
  creditsScreen.style.visibility = "hidden";
  instructionsScreen.style.visibility = "hidden";
  gameplayBtns.style.visibility = "hidden";
  gameplayTxt.style.visibility = "hidden";
  gameplayCountdown.style.visibility = "hidden";
}

// Hide all elements function:
function HideEl() {
  logoContainer.style.visibility = "hidden";
  instructionsBtn.style.visibility = "hidden";
  creditsBtn.style.visibility = "hidden";
  highscoreEl.style.visibility = "hidden";
  startBtn.style.visibility = "hidden";
  creditsScreen.style.visibility = "hidden";
  instructionsScreen.style.visibility = "hidden";
  gameplayBtns.style.visibility = "hidden";
  gameplayTxt.style.visibility = "hidden";
  gameplayCountdown.style.visibility = "hidden";
}

// Show all elements function:
function ShowEl() {
  logoContainer.style.visibility = "visible";
  instructionsBtn.style.visibility = "visible";
  creditsBtn.style.visibility = "visible";
  highscoreEl.style.visibility = "visible";
  startBtn.style.visibility = "visible";
  creditsScreen.style.visibility = "visible";
  instructionsScreen.style.visibility = "visible";
  gameplayBtns.style.visibility = "visible";
  gameplayTxt.style.visibility = "visible";
  gameplayCountdown.style.visibility = "visible";
}

// Game components object:
let GameComponents = {
  colors: ["black", "pink", "orange", "green", "blue", "red"],
  text: ["Black", "Pink", "Orange", "Green", "Blue", "Red"],
};

// Game Engine:
function gameEngine() {
  firstPlay = false;
  const gameComps = GameComponents;
  let randomColor = gameComps.colors[Math.floor(Math.random() * 6)];
  let randomText = gameComps.text[Math.floor(Math.random() * 6)];
  screenEl.style.backgroundColor = randomColor;
  gameplayHeading.textContent = randomText;
  randomText = randomText.toLowerCase();
  console.log("screen color: " + randomColor + "\nText color: " + randomText);
  console.log("number of times a button has been clicked: " + tries);
  tries++;
  listener();
}

function listener() {
  gameplayBtns.addEventListener("mouseover", function () {
    correct.addEventListener("click", correctListener);
    incorrect.addEventListener("click", incorrectListener);
  });
}

function correctListener() {
  console.log("correct btn clicked");
  gameEngine();
}

function incorrectListener() {
  console.log("incorrect btn clicked");
  gameEngine();
}
