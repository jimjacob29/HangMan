let wordCollection = [
  [
    "Artichoke",
    "Aubergine",
    "Amrud",
    "Asparagus",
    "Legumes",
    "AlfalfaSprouts",
    "AzukiBeans",
    "BeanSprouts",
    "BlackBeans",
    "BlackEyedPeas",
    "BorlottiBean",
    "BroadBeans",
    "Chickpeas",
    "GreenBeans",
    "KidneyBeans",
    "Lentils",
    "LimaBeans",
    "MungBeans",
    "NavyBeans",
    "PintoBeans",
    "RunnerBeans",
    "SplitPeas",
    "SoyBeans",
    "Peas",
    "Mangetout",
    "Broccoflower",
    "Broccoli",
    "Sprouts",
    "Cabbage",
    "Kohlrabi",
    "Cauliflower",
    "Celery",
    "Endive",
    "Frisee",
    "Fennel",
    "Greens",
    "Chard",
    "Kale",
    "Spinach",
    "Quinoa",
    "Anise",
    "Basil",
    "Caraway",
    "Cilantro"
  ],
  [
    "Afghanistan",
    "AlandIslands",
    "Albania",
    "Algeria",
    "AmericanSamoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bonaire",
    "Bosnia",
    "Botswana"
  ],
  [
    "Aardvark",
    "Aardwolf",
    "AfricanBuffalo",
    "AfricanElephant",
    "AfricanLeopard",
    "Albatross",
    "Alligator",
    "Alpaca",
    "AmericanBuffalo",
    "AmericanRobin",
    "Amphibian",
    "Anaconda",
    "Angelfish",
    "Anglerfish",
    "Ant",
    "Anteater",
    "Antelope",
    "Antlion",
    "Ape",
    "Aphid",
    "ArabianLeopard",
    "ArcticFox",
    "ArcticWolf",
    "Armadillo",
    "ArrowCrab",
    "Asp",
    "Ass",
    "Baboon",
    "Badger",
    "BaldEagle"
  ]
];

let questionCollection = [
  ["Identify the vegetable"],
  ["Identify the country"],
  ["Identify the animal"]
];

let randomSelection = Math.ceil(Math.random() * 2);
let randomValue = Math.ceil(Math.random() * 25);

let word = wordCollection[randomSelection][randomValue].toLowerCase();
console.log(word);
let question = questionCollection[randomSelection];
console.log(question);
let life = 6;
let inputword = [];
let length = 0;

const gameOver = () => {
  if (life > 0) {
    return true;
  }
  return false;
};

const gameWon = () => {
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== inputword[i]) {
      return false;
    }
  }
  return true;
};

const print = () => {
  for (let i = 0; i < word.length; i++) {
    let el = document.getElementById(i.toString());
    el.innerHTML = word[i].toUpperCase();
  }
};

const checking = (event) => {
  let keyPressed = event.key.toLowerCase();
  let contains = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === keyPressed) {
      let el = document.getElementById(i.toString());
      el.innerHTML = keyPressed.toUpperCase();
      inputword[i] = keyPressed;
      contains = true;
    }
  }
  if (!contains) {
    life--;
  }
  if (gameOver()) {
    remainingChances();
  } else {
    remainingChances();
    print();
    setTimeout(() => {
      popup("GAME OVER!!!");
    }, 100);
  }
  if (gameWon()) {
    setTimeout(() => {
      popup("YOU WON!!!");
    }, 100);
  }
};

const gotoGame = () => {
  let keyPressed = document.addEventListener("keydown", checking);
};

const remainingChances = () => {
  let chances = document.getElementById("chances");
  let lifeDesc = document.createElement("div");
  lifeDesc.classList.add("lifedesc");
  console.log(chances);
  chances.innerHTML = "";
  lifeDesc.innerHTML = `Life:-  `;
  chances.appendChild(lifeDesc);
  for (let i = 0; i < life; i++) {
    let lifeRemains = document.createElement("div");
    lifeRemains.classList.add("lifeRemains");
    lifeRemains.innerHTML = `
    <i class="fa fa-heart customStyle"></i>`;
    chances.appendChild(lifeRemains);
  }
};

const leftSide = () => {
  let animation = document.getElementById("animation");
  let chances = document.createElement("div");
  chances.setAttribute("id", "chances");
  chances.classList.add("chances");
  animation.appendChild(chances);
  remainingChances();
  //chances.innerHTML = `Remaining life: ${life}`;
};

const initGame = () => {
  let gameContainer = document.getElementById("gameContainer");
  let gameArea = document.createElement("div");
  let questionArea = document.createElement("div");
  questionArea.classList.add("question");
  questionArea.innerHTML = question;
  gameContainer.appendChild(questionArea);
  gameArea.classList.add("gameArea");
  for (let i = 0; i < word.length; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("id", i.toString());
    gameArea.appendChild(cell);
  }
  gameContainer.appendChild(gameArea);
  let message = document.createElement("div");
  let messageContent = document.createElement("p");
  messageContent.classList.add("messageContent");
  messageContent.innerHTML = "Press KeyBoard for input";
  message.appendChild(messageContent);
  gameContainer.appendChild(message);

  leftSide();

  gotoGame();
};

const isEmpty = (value) => !value || !value.trim();

const startGame = () => {
  let nameid = document.getElementById("exampleFormControlInput1");
  let button = document.getElementById("button");
  let name = nameid.value;
  if (isEmpty(name)) {
    alert("Enter Name");
    return;
  }
  nameid.setAttribute("disabled", "true");
  button.setAttribute("disabled", "true");
  initGame();
};
