let cardsEl = document.getElementById("cards-el");
let shownCard1 = document.getElementById("card-img1");
let shownCard2 = document.getElementById("card-img2");
let sumCards = document.getElementById("sum-el");

let deck = [
  {
    index: 2,
    value: 2,
    name: 2,
  },
  {
    index: 3,
    value: 3,
    name: 3,
  },
  {
    index: 4,
    value: 4,
    name: 4,
  },
  {
    index: 5,
    value: 5,
    name: 5,
  },
  {
    index: 6,
    value: 6,
    name: 6,
  },
  {
    index: 7,
    value: 7,
    name: 7,
  },
  {
    index: 8,
    value: 8,
    name: 8,
  },
  {
    index: 9,
    value: 9,
    name: 9,
  },
  {
    index: 10,
    value: 10,
    name: 10,
  },
  {
    index: 11,
    value: 10,
    name: "J",
  },
  {
    index: 12,
    value: 10,
    name: "Q",
  },
  {
    index: 13,
    value: 10,
    name: "K",
  },
  {
    index: 14,
    value: 11,
    name: "A",
  },
];

let suits = ["hearts", "diams", "clubs", "spades"];

let playerHand;

function drawRandom(deck) {
  let randomIndex = Math.floor(deck.length * Math.random());
  return deck[randomIndex];
}

function startGame() {
  playerHand = [drawRandom(deck), drawRandom(deck)];
  playerSuit = [drawRandom(suits), drawRandom(suits)];
}
startGame();
console.log(playerHand[0].value, playerHand[1].value);
console.log(playerSuit);

console.log(`${playerHand[0].name} of ${playerSuit}`);
cardsEl.textContent = `Player gets ${playerHand[0].name} of ${playerSuit[0]} and ${playerHand[1].name} of ${playerSuit[1]}`;
shownCard1.style.backgroundImage = `url(img/${playerSuit[0]}/${playerHand[0].name}.png)`;
shownCard2.style.backgroundImage = `url(img/${playerSuit[1]}/${playerHand[1].name}.png)`;
sumCards.textContent = `Sum: ${playerHand[0].value + playerHand[1].value}`;
