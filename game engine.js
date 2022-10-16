window.addEventListener("load", function () {
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
  let randomColor = "";
  let randomText = "";

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
    HideEl();
    gameplayBtns.style.visibility = "visible";
    gameplayTxt.style.visibility = "visible";
    gameplayCountdown.style.visibility = "visible";
    gameEngine();
    firstPlay = false;
    correct.addEventListener("click", checkCorrect);
    incorrect.addEventListener("click", checkIncorrect);
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
    colors: [
      "black",
      "white",
      "pink",
      "orange",
      "green",
      "skyblue", // this is to be checked as "blue"
      "red",
    ],
    text: ["Black", "White", "Pink", "Orange", "Green", "SkyBlue", "Red"],
  };

  // Game Engine:
  function gameEngine() {
    let game = GameComponents;
    randomColor = game.colors[Math.floor(Math.random() * 7)];
    randomText = game.text[Math.floor(Math.random() * 7)];
    screenEl.style.backgroundColor = randomColor;
    gameplayHeading.textContent = randomText;
  }

  // Checking if colour-matches-value:
  function checkCorrect() {
    if (randomColor.toLowerCase() === randomText.toUpperCase()) {
      score++;
      scoreEl.textContent(score);
    } else {
      scoreEl.textContent(score);
      score = 0;
    }
    startGame();
  }
  function checkIncorrect() {
    if (randomColor.toLowerCase() === randomText.toUpperCase()) {
      scoreEl.textContent(score);
      score = 0;
    } else {
      score++;
      scoreEl.textContent(score);
    }
    startGame();
  }
});
