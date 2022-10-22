/* Developer Notes: 
 - make it look cooler
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
const timerText = document.getElementById("gameplay-countdown-text");
const gameplayHeading = document.getElementById("gameplay-text-heading");
const incorrect = document.getElementById("incorrect-img");
const correct = document.getElementById("correct-img");
const scoreEl = document.getElementById("gameplay-score"); // check

let score = 0; // 0 -> default | >0 -> game in progress

/* Game Conditional Variables */
let gameOver = false;
let firstPlay = true;
let isAlive = false;
/* -------------------------- */

let randomColor = "";
let randomText = "";
const scoreCounter = document.getElementById("score-counter");
const retryBtn = document.getElementById("clicktoretry");
const scoreCounterCurrentScore = document.getElementById("current-score");
const scoreCounterHighScore = document.getElementById("current-high-score");

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
scoreCounter.style.visibility = "hidden";

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
  firstPlay = true; // First play
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
  scoreCounter.style.visibility = "hidden";
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
  scoreCounter.style.visibility = "hidden";
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
  scoreCounter.style.visibility = "visible";
}

// Game components object:
let GameComponents = {
  colors: ["black", "pink", "orange", "green", "blue", "red"],
  text: ["Black", "Pink", "Orange", "Green", "Blue", "Red"],
};

// Game Engine:
function gameEngine() {
  scoreCounter.style.visibility = "hidden";
  const gameComps = GameComponents;
  randomColor = gameComps.colors[Math.floor(Math.random() * 6)];
  randomText = gameComps.text[Math.floor(Math.random() * 6)];
  screenEl.style.backgroundColor = randomColor;
  gameplayHeading.textContent = randomText;
  randomText = randomText.toLowerCase();
  timer();
  listener();
}

function listener() {
  gameplayBtns.addEventListener("mouseover", function () {
    correct.addEventListener("click", correctListener);
    incorrect.addEventListener("click", incorrectListener);
  });
}

function correctListener() {
  // console.log("correct btn clicked");
  firstPlay = false; // Game has begun
  if (randomColor === randomText) {
    score++;
    scoreEl.textContent = score;
    buttonClicked();
    gameEngine();
  } else {
    scoreEl.textContent = score;
    scoreCounterCurrentScore.textContent = score;
    score = 0;
    scoreCounter.style.visibility = "visible";
    retry_quest();
  }
}

function incorrectListener() {
  // console.log("incorrect btn clicked");
  firstPlay = false; // Game has begun
  if (randomColor !== randomText) {
    score++;
    scoreEl.textContent = score;
    buttonClicked();
    gameEngine();
  } else {
    scoreEl.textContent = score;
    scoreCounterCurrentScore.textContent = score;
    score = 0;
    scoreCounter.style.visibility = "visible";
    retry_quest();
  }
}

function retry_quest() {
  retryBtn.addEventListener("click", function () {
    score = 0;
    scoreEl.textContent = score;
    firstPlay = true;
    gameEngine();
  });
}

/* Timer */

function buttonClicked() {
  firstPlay = false;
  setInterval(timer, 3000);
}

const time = 3;
let myTime = 1;
function timer() {
  if (firstPlay === true) {
    timerText.textContent = "Begin";
  } else {
    setInterval(updateTimer, 1000);
  }
}

function updateTimer() {
  timerText.textContent = myTime;
  myTime--;
}
